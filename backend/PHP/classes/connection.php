<?php
require_once __DIR__ . "/../classes/concert.php";

/**
 * Class to handle database connections
 **/
class Connection
{
	private $mysqli;

	/**
	 * Constructor
	 * Connects to the database
	 */
	public function __construct()
	{
		$config = parse_ini_file('../../database.ini');

		$this->mysqli = new mysqli($config['host'], $config['username'], $config['password'], $config['dbname']);

		/* change character set to utf8 */
		if (!$this->mysqli->set_charset("utf8")) {
			printf("Error loading character set utf8: %s\n", $this->mysqli->error);
			exit();
		}

		/* check connection */
		if ($this->mysqli->connect_errno) {
			printf("Connect failed: %s\n", $this->mysqli->connect_error);
			exit();
		}
	}

	/**
	 * Returns if a connection is established
	 * @return 		boolean if the connection was successful
	 **/
	public function isConnected()
	{
		if ($this->mysqli->connect_errno) {
			return false;
		} else {
			return true;
		}
	}

	/**
	 * Connects to the database and stores the connection in mysqli
	 * @return 		boolean if the connection was successful
	 **/
	public function connect()
	{
		$config = parse_ini_file('../../database.ini');
		$this->mysqli = new mysqli($config['host'], $config['username'], $config['password'], $config['dbname']);

		/* check connection */
		if ($this->mysqli->connect_errno) {
			return false;
		}
		return true;
	}

	/**
	 * closes the connection
	 **/
	public function close()
	{
		$this->mysqli->close();
	}

	// ======= QUERY METHODS ================================================

	/**
	 * Gets informations about a concert by the concert id
	 * Opens a connection and closes it afterwards
	 * @param id 	concert id
	 * @return 		concert object from database
	 *				false, if id not found
	 **/
	public function getConcert($id)
	{
		if (!$this->connect()) {
			return false; //Connection failed
		}
		// !!Escape id for SQL
		$id = $this->mysqli->real_escape_string($id);

		$query =  "SELECT * FROM concert WHERE id = '" . $id . "'";
		$output = new concert();

		$result = $this->mysqli->query($query);

		// Check if succeeded
		if (!$result || $result->num_rows != 1) {
			return false;
		}
		if ($result) {
			while ($row = $result->fetch_assoc()) {
				$output->rowToConcert($row);
			}
			$result->close();
		}
		$this->close();
		return $output;
	}

	/**
	 * Returns an array of all upcoming concerts
	 * @param      group concert group as string (* can be used to select all groups)
	 * @return 			array of upcoming concerts organized by $group
	 **/
	public function getUpcomingConcerts($group)
	{
		if (!$this->connect()) {
			return false; //Connection failed
		}

		if ($group == "*") { 	// all promoters
			$query =  "SELECT * FROM concert WHERE date >= CURRENT_DATE  ORDER BY date";
		} else {		// special promoter
			// !!Escape group for SQL
			$group = $this->mysqli->real_escape_string($group);

			$query =  "SELECT * FROM concert WHERE date >= CURRENT_DATE AND promoter = '" . $group . "' ORDER BY date";
		}
		$output = array();

		$result = $this->mysqli->query($query);
		if ($result) {
			while ($row = $result->fetch_assoc()) {
				$tmp = new concert();
				$tmp->rowToConcert($row);
				array_push($output, $tmp);
			}
			$result->close();
		}
		$this->close();
		return $output;
	}

	/**
	 * Returns an array of the last concerts
	 * @param limit 	limit of concerts to fetch
	 * @param group
	 * @return 			array of the last concerts, organized by $group
	 **/
	public function getLastConcerts($limit, $group)
	{
		if (!$this->connect()) {
			return false; //Connection failed
		}


		if ($group == "*") {	// All promoters
			$query =  "SELECT * FROM concert WHERE date < CURRENT_DATE  ORDER BY date DESC  LIMIT " . $limit;
		} else { // special promoter

			// !!Escape group and limit for SQL
			$group = $this->mysqli->real_escape_string($group);
			$limit = $this->mysqli->real_escape_string($limit);
			$query =  "SELECT * FROM concert WHERE date < CURRENT_DATE  AND promoter = '" . $group . "' ORDER BY date DESC  LIMIT " . $limit;
		}

		$output = array();

		$result = $this->mysqli->query($query);
		if ($result) {
			while ($row = $result->fetch_assoc()) {
				$tmp = new concert();
				$tmp->rowToConcert($row);
				array_push($output, $tmp);
			}
			$result->close();
		}
		$this->close();
		return $output;
	}

	// FUNCTIONS FOR CONERT UPDATES  =========================
	/**
	 * Function to change the properties of a concert
	 * @param input 	Array, containing all informations
	 **/
	public function updateConcert($input)
	{
		if (!$this->connect()) {
			return false; //Connection failed
		}
		// !! ---Escape everything for SQL
		$bands = $this->mysqli->real_escape_string($input['bands']);
		$date = $this->mysqli->real_escape_string($input['date']);
		$place = $this->mysqli->real_escape_string($input['place']);
		$doors = $this->mysqli->real_escape_string($input['doors']);
		$begin = $this->mysqli->real_escape_string($input['begin']);
		$fblink = $this->mysqli->real_escape_string($input['fblink']);
		$buylink = $this->mysqli->real_escape_string($input['buylink']);
		$description = $this->mysqli->real_escape_string($input['description']);
		$promoter = $this->mysqli->real_escape_string($input['promoter']);
		$id = $this->mysqli->real_escape_string($input['id']);

		// Upload picture if image is base64 input
		if (preg_match('/data:image.*/', $input['picture'])) {
			$image_path = "img/concert/concert" . $promoter .  $date .  ".png";
			$image_file = fopen($image_path, "wb");
			$image_data = explode(',', $input['picture']);
			fwrite($image_file, base64_decode($image_data[1]));
			fclose($image_file);
		} else {
			$image_path = $input['picture'];
		}

		// Execute query
		$query = '
			UPDATE concert
			SET bands = "' . $bands . '",
				date = "' . $date . '",
				place = "' . $place . '",
				doors = "' . $doors . '",
				begin = "' . $begin . '",
				fblink = "' . $fblink . '",
				buylink = "' . $buylink . '",
				description = "' . $description . '",
				promoter = "' . $promoter . '",
				picture = "' . $image_path . '"
			WHERE id = "' . $id . '";';
		$result = $this->mysqli->query($query);
		if (!$result) {
			return false;
		}
		$this->close();
		return true;
	}

	/**
	 * Function to create a new concert
	 * @param input 	Array, containing all informations
	 **/
	public function createConcert($input)
	{
		if (!$this->connect()) {
			return false; //Connection failed
		}

		// !! ---Escape everything for SQL
		$bands = $this->mysqli->real_escape_string($input['bands']);
		$date = $this->mysqli->real_escape_string($input['date']);
		$place = $this->mysqli->real_escape_string($input['place']);
		$doors = $this->mysqli->real_escape_string($input['doors']);
		$begin = $this->mysqli->real_escape_string($input['begin']);
		$fblink = $this->mysqli->real_escape_string($input['fblink']);
		$buylink = $this->mysqli->real_escape_string($input['buylink']);
		$description = $this->mysqli->real_escape_string($input['description']);
		$promoter = $this->mysqli->real_escape_string($input['promoter']);

		// Upload picture
		$image_path = "img/concert/concert" . $promoter .  $date .  ".png";
		$image_file = fopen($image_path, "wb");
		$image_data = explode(',', $input['picture']);
		fwrite($image_file, base64_decode($image_data[1]));
		fclose($image_file);

		// Execute query
		$query = '
			INSERT INTO concert (bands, date, place, doors, begin, fblink, buylink, description, promoter, picture)
			VALUES ( "' . $bands . '", "' . $date . '",	"' . $place . '","' . $doors . '","' . $begin . '","' . $fblink . '",
					 "' . $buylink . '","' . $description . '",	 "' . $promoter . '","' . $image_path . '");';
		echo $query;
		$result = $this->mysqli->query($query);
		if (!$result) {
			return false;
		}
		$this->close();
		return true;
	}

	/**
	 * Deletes a concert by its id
	 */
	function deleteConcert($id)
	{
		if (!$this->connect()) {
			return false; //Connection failed
		}
		// !! ---Escape id for SQL
		$id = $this->mysqli->real_escape_string($id);

		// TODO: delete picture
		$query = "DELETE FROM concert WHERE id = \"" . $id . "\";";
		$result = $this->mysqli->query($query);
		if (!$result) {
			return false;
		}
		$this->close();
		return true;
	}

	// FUNCTIONS FOR LOGIN/LOGOUT =========================

	/**
	 * Checks if the given login data is correct (currently without database)
	 * @param user 		username to check
	 * @param password 	password to check
	 * @return 			boolean if the data is correct
	 */
	public function checkLogin($user, $password)
	{
		if ($user != 'glk') {
			return false;
		}
		$hash = '$2y$10$TeC2RwdIRBmWVvtblDrVz.0pq.v3hdtZG77v/I3Rery8q.s7WGgAC';
		//$hash = password_hash($password, PASSWORD_DEFAULT);
		return password_verify($password, $hash);
	}
}
