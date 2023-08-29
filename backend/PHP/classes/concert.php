<?php

/**
 *  Class to handle concerts
 **/
class concert {

    public $bands;
    public $date;
    public $place;
    public $doors;
    public $begin;
    public $fblink;
    public $buylink;
    public $picture;
    public $description;
    public $promoter;
    public $id;

   /**
    * Empty constructor
    **/
   public function __construct(){

   }

   /**
    * Method to change all variables
    **/
    public function setData($bands, $date, $place, $doors, $begin, $fb, $link, $pic, $description, $promoter, $id){
    	$this->headline 	= $head;
	    $this->bands 		= $bands;
	    $this->date 		= $date;
	    $this->place 		= $place;
        $this->doors        = $doors;
        $this->begin        = $begin;
	    $this->price 		= $price;
	    $this->fblink 		= $fb;
	    $this->buylink 		= $link;
	    $this->picture 		= $pic;
	    $this->description 		= $description;
	    $this->promoter 		= $promoter;
	    $this->id 			= $id;
    }

    /**
     * Reads all values from a sql row
     * ! non-static !
     * @param row       SQL row to read from
     **/
    public function rowToConcert( $row ){
        $this->bands      = mb_convert_encoding($row['bands'],  "UTF-8", "latin1");
        $this->date       = mb_convert_encoding($row['date'],  "UTF-8", "latin1");
        $this->place      = mb_convert_encoding($row['place'],  "UTF-8", "latin1");
        $this->doors      = mb_convert_encoding($row['doors'],  "UTF-8", "latin1");
        $this->begin      = mb_convert_encoding($row['begin'],  "UTF-8", "latin1");
        $this->fblink     = mb_convert_encoding($row['fblink'],  "UTF-8", "latin1");
        $this->buylink    = mb_convert_encoding($row['buylink'],  "UTF-8", "latin1");
        $this->picture    = mb_convert_encoding($row['picture'],  "UTF-8", "latin1");
        $this->description= mb_convert_encoding($row['description'],  "UTF-8", "latin1");
        $this->promoter   = mb_convert_encoding($row['promoter'],  "UTF-8", "latin1");
        $this->id         = mb_convert_encoding($row['id'],  "UTF-8", "latin1");
    }
}
