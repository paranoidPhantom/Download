// Чтобы добавить скопируй одну из версий и сделай список ссылок каждого типа
// Дабавлять индексы к версии не нужно, работать не будет
// Версия выше в списке = Версия выше на странице
const Links = {
    "53": {
        "Yandex": ["https://disk.yandex.ru/d/QA3BsONIYB9zpA"],
        "Google": ["https://drive.google.com/drive/folders/1SzmsjoRUO-3OZRKzjCYUJD6jA8uDr1Ac?usp=share_link"],
        "Torrent": ["magnet:?xt=urn:btih:6DDI52KXJKJ5APN2VO4FCSWPWL72RTFF&dn=Stalker_UE5&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce"],
        "Mega": ["https://mega.nz/folder/v74n3QDC#tXX0sFWrtTYccxkFh6gM0w/folder/S3xnSZaD"]
    }
}
// Дальше уже идёт генерация страницы
const main = document.querySelector("main")
const versionButtons = document.querySelector(".multi-button")
const Keys = Object.keys(Links)

function GetButtonImage(LinkSource) {
    return "Media/" + LinkSource.toLowerCase() + ".png"
}

function CreateLink(HREF, LinkSource, LinkContainer) {
    // Create the button 
    const a = document.createElement("a")
    LinkContainer.appendChild(a)
    a.setAttribute("class","badge")
    a.setAttribute("target","_blank")
    a.setAttribute("href",HREF)
    // Circle inside it
    const div = document.createElement("div")
    a.appendChild(div)
    div.setAttribute("class","rounded")
    // Image inside of the circle
    const img = document.createElement("img")
    div.appendChild(img)
    const imgURL = GetButtonImage(LinkSource)
    img.setAttribute("src", imgURL)
    img.setAttribute("alt", "Download from " + LinkSource)
}

main.innerHTML = ""
versionButtons.innerHTML = ""

for (let Index = 0; Index < Keys.length; Index++) {
    // For each version
    const Version = Keys[Index]
    const Content = Links[Version]
    const YandexLinks = Content["Yandex"]
    const GoogleLinks = Content["Google"]
    const TorrentLinks = Content["Torrent"]
    const MegaLinks = Content["Mega"]

    // Header linking button
    const versionLink = document.createElement("a")
    versionButtons.appendChild(versionLink)
    versionLink.setAttribute("href","#"+Version)
    const versionButton = document.createElement("button")
    versionLink.appendChild(versionButton)
    versionButton.innerHTML = Version

    // Create section and <h1> in <main>
    const h1 = document.createElement("h1")
    main.appendChild(h1)
    h1.innerHTML = "Скачать билд " + Version
    h1.setAttribute("id",Version)
    const section = document.createElement("div")
    main.appendChild(section)
    section.setAttribute("class","section")

    // Cycle through each link type
    for (let LinkIndex = 0; LinkIndex < YandexLinks.length; LinkIndex++) {
        // For each link
        CreateLink(YandexLinks[LinkIndex],"Yandex",section)
    }
    for (let LinkIndex = 0; LinkIndex < GoogleLinks.length; LinkIndex++) {
        // For each link
        CreateLink(GoogleLinks[LinkIndex],"Google",section)
    }
    for (let LinkIndex = 0; LinkIndex < TorrentLinks.length; LinkIndex++) {
        // For each link
        CreateLink(TorrentLinks[LinkIndex],"Torrent",section)
    }
    for (let LinkIndex = 0; LinkIndex < MegaLinks.length; LinkIndex++) {
        // For each link
        CreateLink(MegaLinks[LinkIndex],"Mega",section)
    }
}