function fileOnClick(event)
{
    const a = event.target;
    event.preventDefault();
    fetch(a.href).then(response => {
        if (response.status === 200)
        {
            response.blob().then(blob => {
                a.download = a.href.split("/").pop();
                a.href = URL.createObjectURL(blob);
                a.click();
            });
        }
    });
}

function start()
{
    const clickOptions = {
        capture: true,
        once: true
    };
    document.querySelectorAll(".blobdl a").forEach(a => {
        if (a.href.startsWith("https://raw.githubusercontent.com/"))
        {
            a.addEventListener("click", fileOnClick, clickOptions);
        }
    });
}

start();
