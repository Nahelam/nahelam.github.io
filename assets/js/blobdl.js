const GIT_URL = "https://github.com/Nahelam/";

function fileOnClick(event)
{
    const a = event.target;

    fetch(GIT_URL + a.href).then(response => {
        if (response.status === 200) {
            response.blob().then(blob => {
                a.download = a.href.split("/").pop();
                a.href = URL.createObjectURL(blob);
            }
        }
    }
}

function start()
{
    const clickOptions = {
        capture: true,
        once: true
    };

    const files = document.getElementsByClassName("blobdl");
    for (const file of files)
    {
        file.addEventListener("click", fileOnClick, clickOptions);
    }
}

start();
