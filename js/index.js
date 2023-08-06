//initializing variables:
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var sitesArray = [];
displaySites();
//clear inputs function
if(localStorage.getItem("localStoragee") == null)
{
    sitesArray = [];
}
else
{
    sitesArray = JSON.parse(localStorage.getItem("localStoragee"));
}
function clearInputs() 
{
    siteNameInput.value = "";
    siteUrlInput.value = "";
}
//add site function
function Submit() 
{
    var site = 
    {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    };
    sitesArray.push(site);
    localStorage.setItem("localStoragee", JSON.stringify(sitesArray));
    displaySites();
    clearInputs();
}
//displaying sites:
function displaySites() 
{
    var tableElements = "";
    for (var i = 0; i < sitesArray.length; i++) 
    {
        tableElements += 
        `
        <tr>
            <td>${i}</td>
            <td>${sitesArray[i].siteName}</td>
            <td>${sitesArray[i].siteUrl}</td>
            <td>
                <button onclick="visitSite(${i})"class="btn btn-outline-warning "><a href="${JSON.stringify(sitesArray[i].siteUrl)}">visit</a></button>
                
            </td>
            <td>
                <button onclick="deleteSite(${i})" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>
        `
        ;
    }
    document.getElementById("tableBody").innerHTML = tableElements;
}
function deleteSite(siteIndex) 
{
    sitesArray.splice(siteIndex, 1);
    displaySites();
    localStorage.setItem("localStoragee", JSON.stringify(sitesArray));
}
window.onload = function() 
{
    displaySites();
}

function visitSite(siteIndex) 
{
    window.open(sitesArray[siteIndex].siteUrl, "_blank");
}