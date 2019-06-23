'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.getEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
};

exports.getEventEventID = function(event_id) {
  /**
   * parameters expected in the args:
  * eventID (String)
  **/

  //todo: extend query to get reviews and events

  return new Promise(function (resolve, reject) {

    console.log("---------------executing getEventEventID--------------------");
    console.log("event_id: '" + event_id + "'");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.events as e')
        .where('e.event_id', event_id)
        .leftJoin('new_schema.books AS b', 'e.isbn', 'b.isbn')
        .leftJoin('new_schema.written_by AS wb', 'e.isbn', 'wb.isbn')
        .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
        .then(result => {
          console.log(result);
          resolve(result)
        });
  });
  
};

exports.getEventFindByBook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iSBN (Long)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getEventFindByMonth = function(args, res, next) {
  /**
   * parameters expected in the args:
  * month (Date)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getEventFindByName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}
