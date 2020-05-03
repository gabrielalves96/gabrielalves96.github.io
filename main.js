const eyePos = {
    down: [
        "m 66.145832,156.77083 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
        "m 95.249999,156.77083 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
    ],
    downRight: [
        "m 68.791665,156.77084 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
        "m 97.895832,156.77084 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645838 v 2.64583 h -2.645838",
    ],
    right: [
        "m 68.791666,154.125 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645842 v 2.64583 h -2.645834",
        "m 97.895828,154.125 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645842 v 2.64583 h -2.645842",
    ],
    upRight: [
        "m 68.791665,151.47917 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
        "m 97.895832,151.47917 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645838 v 2.64583 h -2.645838",
    ],
    up: [
        "m 66.145832,151.47917 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
        "m 95.249999,151.47917 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645838 v 2.64583 h -2.645838",
    ],
    upLeft: [
        "m 63.499999,151.47917 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
        "m 92.604166,151.47917 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645838 v 2.64583 h -2.645838",
    ],
    left: [
        "m 63.499999,154.12501 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
        "m 92.604166,154.12501 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645838 v 2.64583 h -2.645838",
    ],
    downLeft: [
        "m 63.499999,156.77084 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645834 v 2.64583 h -2.645834",
        "m 92.604161,156.77084 c 0,-2.64583 0,-2.64583 0,-2.64583 h 2.645838 v 2.64583 h -2.645838",
    ],
}

let currentPos;

window.addEventListener('mousemove', (e) => {
    let xPercent = window.innerWidth/100;
    let yPercent = window.innerHeight/100;

    if(e.x / xPercent <= 33) {
        if (e.y / yPercent <= 33) currentPos = eyePos.upLeft;
        if (e.y / yPercent > 33 && e.y /yPercent <= 66) currentPos = eyePos.left;
        if (e.y / yPercent > 66) currentPos = eyePos.downLeft;
    }
    else if (e.x / xPercent > 33 && e.x / xPercent <= 66 ) {
        if (e.y / yPercent <= 66) currentPos = eyePos.up;
        if (e.y / yPercent > 66) currentPos = eyePos.down;
    }
    else if (e.x / xPercent > 66) {
        if (e.y / yPercent <= 33) currentPos = eyePos.upRight;
        if (e.y / yPercent > 33 && e.y /yPercent <= 66) currentPos = eyePos.right;
        if (e.y / yPercent > 66) currentPos = eyePos.downRight;
    }

    anime({
        targets: "#path4568",
        d: [
          {
            value: currentPos[0]
          },
        ],
        autoplay: true,
        easing: "easeOutQuad",
        duration: 300,
        loop: false,
    });

    anime({
        targets: "#path4570",
        d: [
            {
                value: currentPos[1]
            },
        ],
        autoplay: true,
        easing: "easeOutQuad",
        duration: 300,
        loop: false,
    });
});
