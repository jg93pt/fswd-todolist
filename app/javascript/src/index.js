import $ from 'jquery';

import {
  indexTasks,
  postTask,
  deleteTask,
  markComplete,
  markActive
} from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function(task) {

      if (!task.completed) {
      return "<tr class='spacetable'> <td class='task'>" + task.content + "</td> <td><input class='form-check-input' type='checkbox' data-id='"+ task.id + "'></td> <td><button class='btn btn-danger btn-remove' id ='removeTask' data-id ='" + task.id + "'>Remove</button></td></tr>";
      }
      else if (task.completed) {
        return "<tr class='spacetable'> <td class='task'>" + task.content + "</td> <td><input class='form-check-input' type='checkbox' data-id='"+ task.id + "' checked></td> <td><button class='btn btn-danger btn-remove' id ='removeTask' data-id ='" + task.id + "'>Remove</button></td></tr>";
      }
  });

  $("#tasks").html(htmlString);
});



$(document).on('click', "#addTask", function(event){
  var input = $('#taskInput').val();
  postTask(input);
})

$(document).on('click', "#removeTask", function(event){
  var taskid = $(this).attr('data-id');
  deleteTask(taskid);
})


// Function for updating task active/complete based on checkbox
$(document).on('click', ".form-check-input", function(event){
  var checkbox = $(this).attr('data-id');
  if($(this).is(':checked')){
    markComplete(checkbox);
  }else{
    markActive(checkbox);
  }
})

