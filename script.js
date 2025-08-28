let loveCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    // Love Buttons
    document.querySelectorAll(".fa-heart").forEach(btn => {
        btn.addEventListener("click", () => {
            loveCount++;
            document.getElementById("loveCount").textContent = loveCount;
        });
    });

    // Copy Buttons
    document.querySelectorAll(".copyBtn").forEach(copyBtn => {
        copyBtn.addEventListener("click", (e) => {
            const number = e.target.closest(".bg-white").querySelector(".text-2xl").textContent;
            navigator.clipboard.writeText(number);
            copyCount++;
            document.getElementById("copyCount").textContent = copyCount;
            // alert("Number Copied: " + number);
        });
    });

    // Call Buttons
    document.querySelectorAll(".callBtn").forEach(callBtn => {
        callBtn.addEventListener("click", (e) => {
            if (coinCount >= 20) {
                alert("Calling....");
                coinCount -= 20;
                document.getElementById("coinCount").textContent = coinCount;

                // Add to history
                const card = e.target.closest(".bg-white");
                const name = card.querySelector(".service-name").textContent;
                const number = card.querySelector(".ph-number").textContent;

                const historyList = document.getElementById("historyList");
                const li = document.createElement("li");
                li.textContent = name + " - " + number + " (" + new Date().toLocaleTimeString() + ")";
                historyList.prepend(li);
            } else {
                alert("Not enough coins!");
            }
        });
    });

    // Clear History
        document.getElementById("clearHistory").addEventListener("click", () => {
            document.getElementById("historyList").innerHTML = "";
        });