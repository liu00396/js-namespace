var LIU00396 = {
    init: function () {
        var box = document.createElement("div");
        box.classList.add("box");
        box.textContent = "LIU00396";
        var boxes = document.querySelector("#boxes");
        boxes.appendChild(box);
        box.addEventListener("click", clicklistener);
        box.addEventListener("mouseover", mouseoverlistener);
        box.addEventListener("mouseout", mouseoutlistener);

        function clicklistener(ev) {
            ev.currentTarget.style.borderColor = "red";
            ev.currentTarget.style.backgroundColor = "gray";
        }

        function mouseoverlistener(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function mouseoutlistener(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

    }
};
