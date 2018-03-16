var rootNode = document.getElementById("root");

var ul = document.createElement("ul");
rootNode.appendChild(ul);

var li = document.createElement("li");
li.className = 'folder';
ul.appendChild(li);

var title = document.createElement("p");
title.className = 'folder-name';
li.appendChild(title);

var text = document.createTextNode("Films");
title.appendChild(text);

var x = document.createElement("i");
x.className = 'material-icons';
title.appendChild(x);

var img = document.createTextNode("folder");
x.appendChild(img);

var liS = document.createElement("li");
liS.className = 'folder';
ul.appendChild(liS);

var title2 = document.createElement("p");
title2.className = 'folder-name';
liS.appendChild(title2);

var Documents = document.createTextNode("Documents");
title2.appendChild(Documents);

var y = document.createElement("i");
y.className = 'material-icons';
title2.appendChild(y);

var img2 = document.createTextNode("folder");
y.appendChild(img2);
