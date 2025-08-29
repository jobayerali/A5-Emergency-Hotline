let loveCount = 0;
        let coinCount = 100;
        let copyCount = 0;

        // love button
        document.querySelectorAll(".fa-heart").forEach(btn => {
            btn.addEventListener("click", () => {
                loveCount++;
                document.getElementById("loveCount").textContent = loveCount;
            });
            
        });

        // copy button
        document.querySelectorAll(".copyBtn") .forEach(copyBtn => {
            copyBtn.addEventListener("click", (e)=> {
                const number = e.target.closest(".bg-white").querySelector(".text-2xl").textContent;
                navigator.clipboard.writeText(number);
                copyCount++;
                document.getElementById("copyCount").textContent = copyCount;
            
            });
        });

        // call button

        
        let callButtons = document.querySelectorAll(".callBtn");
callButtons.forEach(function(callBtn){
    callBtn.addEventListener("click", function(e){
        if(coinCount >= 20){

            let card = e.target.closest(".bg-white");
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
            alert("Not enough coins!");
        }
    });
});


    // clear History

    document.getElementById("clearHistory").addEventListener("click", () => {
        document.getElementById("historyList").innerHTML = "";

    });