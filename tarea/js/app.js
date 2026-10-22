async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );
    if (!res.ok) throw new Error("Error en la petición");

    const posts = await res.json();

    lista.innerHTML = posts.map((p) => `<li>${p.title}</li>`).join("");
  } catch (error) {
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPosts();
