import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var deleteTask = function (taskid, successCB, errorCB) {
  var request = {
    type: 'DELETE',
    url: 'api/tasks/' + taskid + '?api_key=1',
    success: successCB,
    error: errorCB
  }
  
  $.ajax(request);
  location.reload();
};

export var markComplete = function (taskid, successCB, errorCB){
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + taskid + '/mark_complete?api_key=1',
    data: {
      task: {
        completed: true
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}

export var markActive = function (taskid, successCB, errorCB){
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + taskid + '/mark_active?api_key=1',
    data: {
      task: {
        completed: false
      }
    },
    success: successCB, 
    error: errorCB
  }

  $.ajax(request);
}