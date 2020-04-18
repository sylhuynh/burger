$(() => {
    $(".eaten").on("click", function() {
        const id = $(this).attr("data-id");
        $.ajax({
            url: `/api/burgers/${id}`,
            method: "PATCH", 
            data: {devoured: true}
        }).then(()=>{
            location.reload();
        })
    })
});