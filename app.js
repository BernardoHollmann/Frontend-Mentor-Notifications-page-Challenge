window.onload = () => {

    let Notifications = document.getElementById('notif')
    let activities = document.querySelectorAll('.activity');
    let markAll = document.querySelector('.all');

    activities.forEach(element => {

        if (element.classList.value.includes("unread")) {
            const newUnreadMessages = document.querySelectorAll(".unread");
            Notifications.innerText = newUnreadMessages.length                     
        }
       
        element.addEventListener('click', function(){
            if (element.classList.value.includes("unread")) {
                element.classList.replace("unread", "read")
                const newUnreadMessages = document.querySelectorAll(".unread");
                Notifications.innerText = newUnreadMessages.length
            } 
        });
    });

    markAll.addEventListener("click", () => {
        activities.forEach(element => {

            if (element.classList.value.includes("unread")) {
                element.classList.replace("unread", "read")
                const newUnreadMessages = document.querySelectorAll(".unread");
                Notifications.innerText = newUnreadMessages.length
            } 

        });
    })

}
