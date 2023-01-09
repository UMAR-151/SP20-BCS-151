$(function(){

LoadBooks();
});

function LoadBooks(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/",
        method:"GET",
        success:function(response){
            console.log(response);
            var posts = $("#posts")
            posts.empty();
            for(var i = 0; i<response.length; i++){
                var a = response[i];
            posts.append(`<div class="post"> <h2> ${a.title}</h2></div>`);
        }
    }
    });
}