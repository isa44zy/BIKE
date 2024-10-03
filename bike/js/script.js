function ModalWarning(){
    Swal.fire({
        title: "!item adicionado ao carrinho",
        text: "item adicionado ao carrinho",
        icon: "success"
      });
}

function ModalWarning(){
    Swal.fire({
        title: "twm certeza",
        text: "serio",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}
function ModalWarning(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });

}