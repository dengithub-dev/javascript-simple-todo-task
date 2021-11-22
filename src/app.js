function createNewElement()
{
    // First create a DIV element.
    var get_link = document.getElementById('text_add').value;
    var txtNewInputBox = document.createElement('div');
    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<ul id=" + get_link + "><strong>" + get_link + "</strong><br><a href='#' onclick=document.getElementById('res').innerHTML='"+ get_link +"';strike_list()>Done</a>&nbsp;&nbsp;&nbsp<a href='#' onclick=document.getElementById('res').innerHTML='"+ get_link +"';delete_list()>Remove</a></ul>";
    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId").appendChild(txtNewInputBox);
}
function strike_list()
{
    var get_id = document.getElementById('res').innerHTML;
    //strike get_id
    document.getElementById(get_id).style.textDecoration = "line-through";
    //document.getElementById(get_id).strike();
}
function delete_list()
{
    var get_id = document.getElementById('res').innerHTML;
    //remove get_id
    document.getElementById(get_id).remove();
}