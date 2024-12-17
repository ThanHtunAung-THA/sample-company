function alertHello() {
    alert("Hello, World!");
};

function alertClick() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}

function alertClick2() {
    Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "error",
        html: `
          The Action is not available right now. <br/>
          It is currently in <b>UNDER CONSTRUCTION</b>.
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
      });
      
};

function alertClick3 () {
    Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
      });

}

function alertClick_main () {
    fetch('underCons/index.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            Swal.fire({
                // draggable: true,
                html: data, // Insert the fetched HTML content here
                showCloseButton: true,
                

            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to load content. Pages are currently under construction.",
                customClass: {
                    icon: 'small-icon' // Custom class for the icon
                },

            });
        });
}

function alertClick_pages() {
    fetch('../underCons/indexforpages.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            Swal.fire({
                // draggable: true,
                html: data, // Insert the fetched HTML content here
                showCloseButton: true,
                

            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to load content. Pages are currently under construction.",
                customClass: {
                    icon: 'small-icon' // Custom class for the icon
                },

            });
        });
}