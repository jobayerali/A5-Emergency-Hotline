let loveCount = 0;
        let coinCount = 100;
        let copyCount = 0;

        // love button
        document.querySelectorAll(".heart-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                loveCount++;
                document.getElementById("loveCount").textContent = loveCount;
            });
            
        });

        // copy button
        document.querySelectorAll(".copyBtn") .forEach(copyBtn => {
            copyBtn.addEventListener("click", (e)=> {
                const card = copyBtn.closest(".copy-card");
                const number = card.querySelector(".add-copy").textContent.trim();
                navigator.clipboard.writeText(number);
                copyCount++;
                document.getElementById("copyCount").textContent = copyCount;
                alert("Text copied: " + number);
                
            });
        });

        // call button

        
        let callButtons = document.querySelectorAll(".callBtn");
callButtons.forEach(function(callBtn){
    callBtn.addEventListener("click", function(e){
        if(coinCount >= 20){

            let card = e.target.closest(".call-btn");
            let name = card.querySelector(".service-name").textContent;
            let number = card.querySelector(".ph-number").textContent;
            alert("Calling " + name + " (" + number + ") ...");

            coinCount = coinCount - 20;   
            document.getElementById("coinCount").textContent = coinCount;

            let historyList = document.getElementById("historyList");
            let li = document.createElement("li");
            li.textContent = name + " - " + number + " (" + new Date().toLocaleTimeString() + ")";
            historyList.prepend(li);
        } else {
            alert("Not enough coins!" + number );
        }
    });
});


    // clear History

    document.getElementById("clearHistory").addEventListener("click", () => {
        document.getElementById("historyList").innerHTML = "";

    });