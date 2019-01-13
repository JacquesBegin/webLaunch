

function getTime() {
  var dateTime = new Date();
  document.getElementById("dateTime").innerHTML = dateTime.toLocaleString();
  var t = setTimeout(getTime, 500);
}
getTime();

function saveWebsite() {
  var localWebsites = JSON.parse(localStorage.localWebsites || null) || {};
  var websiteAddress = document.getElementById("websiteAddress").value;
  if (localWebsites.sites) {
    localWebsites.sites.push(websiteAddress);
  } else {
    localWebsites.sites = [];
    localWebsites.sites.push(websiteAddress);
  }
  localStorage.localWebsites = JSON.stringify(localWebsites);
}

function removeWebsite(site) {
  alert(site);
  var localWebsites = JSON.parse(localStorage.localWebsites || null) || {};
  alert(localWebsites.sites.indexOf(site));
  localWebsites.sites.splice(localWebsites.sites.indexOf(site), 1);
  localStorage.localWebsites = JSON.stringify(localWebsites);
}

function loadWebsites() {
  var localWebsites = JSON.parse(localStorage.localWebsites || null) || {};
  var sitesDiv = document.getElementById("sites");
  if (localWebsites) {
    localWebsites.sites.forEach(site => {
      var siteItem = document.createElement('div');
      var siteLink = document.createElement('a');
      // var siteDelete = document.createElement('button');
      siteLink.href = site; // if "http://" or "https://" is missing from URL string the link will fail.
      siteLink.innerHTML = site;
      siteLink.target = "_blank";
      // siteDelete.innerHTML = "X";
      // siteDelete.dataset.site = site;
      // siteDelete.onclick = removeWebsite();
      siteItem.appendChild(siteLink);
      // siteItem.appendChild(siteDelete);
      sitesDiv.appendChild(siteItem);
    }
  )};
}
loadWebsites();
