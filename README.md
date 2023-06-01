<ul>
<li> Clone the Repo </li>
</ul>
<p> node server.js </p>

<ul>
<li> Old proj (before node.js) </li>
</ul>
<p>npx json-server --watch db.json --port 3000</p>



<h2>Operații asupra DOM-ului:</h2>
<p>
Creare: În admin-dash.js, codul creează dinamic elemente div pentru fiecare post și le adaugă la DOM.

Editare: În blogpost-edit.js, codul modifică valorile campurilor pentru titlu și conținut în funcție de datele postului preluate.

Ștergere: În admin-dash.js, codul adaugă un listener de evenimente la trash-icon, iar la apăsarea acesteia, se elimină elementul div corespunzător postului din DOM. Acesta este un exemplu de ștergere a unui nod din DOM.
</p>

<h2>Events mouse si tastatură:</h2>
<p>
Evenimente de mouse: În admin-dash.js, codul adaugă un listener de evenimente la div-ul postului, iar la clic, redirecționează utilizatorul către pagina blogpost-edit.html.
</p>

<h2>Ajax:</h2>

<p>

POST: În admin-dash.js, codul trimite o cerere POST pentru a crea un nou post când utilizatorul trimite formularul în blogpost-edit.html. Noile date ale postului sunt trimise la server folosind Ajax.

PUT: În blogpost-edit.js, codul trimite o cerere PUT pentru a actualiza datele postului când utilizatorul trimite formularul în blogpost-edit.html. Datele actualizate ale postului sunt trimise la server folosind Ajax.

GET: În admin-dash.js, codul trimite o cerere GET pentru a prelua datele posturilor de la server.

DELETE: În admin-dash.js, codul trimite o cerere DELETE la server când utilizatorul confirmă ștergerea unui post.
</p>
