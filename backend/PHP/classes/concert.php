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
        $this->bands      = ($row['bands']);
        $this->date       = $row['date'];
        $this->place      = ($row['place']);
        $this->doors      = ($row['doors']);
        $this->begin      = ($row['begin']);
        $this->fblink     = ($row['fblink']);
        $this->buylink    = ($row['buylink']);
        $this->picture    = ($row['picture']);
        $this->description= ($row['description']);
        $this->promoter   = ($row['promoter']);
        $this->id = $row['id'];
    }
}
