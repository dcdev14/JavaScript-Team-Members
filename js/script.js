const allMembers = document.querySelector(".member-description").children;
const membersTrigger = document.querySelector(".grid-container").children;

// Toggle effect 

for (let i = 0; i < membersTrigger.length; i++) {
  // Get index of clicked element
  membersTrigger[i].onclick = () => {
    const index = [...membersTrigger[i].parentElement.children].indexOf(membersTrigger[i]);

    !allMembers[index].classList.add("hide");

    // Show clicked member
    allMembers[index].classList.remove("hide");

    // Add active-member class to trigger
    membersTrigger[index].classList.add("active-member");

    !membersTrigger[index].classList.remove("active-member");
  }
}

// Tilt effect

$('.trigger-img').tilt({
  scale: 1.1
})