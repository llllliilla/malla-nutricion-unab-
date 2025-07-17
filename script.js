const ramos = [
  // --- AÑO 1 ---
  { id: "fundamentos", nombre: "Fundamentos de los Alimentos y Nutrición", semestre: 1, año: 1, requisitos: [] },
  { id: "alimentos", nombre: "Alimentos", semestre: 1, año: 1, requisitos: [] },
  { id: "biologia", nombre: "Biología Celular", semestre: 1, año: 1, requisitos: [] },
  { id: "quimica", nombre: "Química General y Orgánica", semestre: 1, año: 1, requisitos: [] },
  { id: "matematicas", nombre: "Matemáticas Elemental", semestre: 1, año: 1, requisitos: [] },
  { id: "comunicacion", nombre: "Habilidades Comunicativas", semestre: 1, año: 1, requisitos: [] },

  { id: "quimica_alimentos", nombre: "Química de los Alimentos", semestre: 2, año: 1, requisitos: ["quimica", "matematicas"] },
  { id: "microbiologia", nombre: "Microbiología", semestre: 2, año: 1, requisitos: ["biologia"] },
  { id: "bioquimica", nombre: "Bioquímica Nutricional", semestre: 2, año: 1, requisitos: ["quimica"] },
  { id: "morfologia", nombre: "Morfología", semestre: 2, año: 1, requisitos: ["biologia"] },
  { id: "ingles1", nombre: "Inglés I", semestre: 2, año: 1, requisitos: [] },

  // --- AÑO 2 ---
  { id: "tecnicas", nombre: "Técnicas Dietéticas", semestre: 3, año: 2, requisitos: ["quimica_alimentos"] },
  { id: "fisiopato1", nombre: "Fisiopatología I", semestre: 3, año: 2, requisitos: ["bioquimica", "morfologia"] },
  { id: "higiene", nombre: "Higiene y Control de Alimentos", semestre: 3, año: 2, requisitos: ["microbiologia", "alimentos"] },
  { id: "psicologia", nombre: "Psicología y Educación en Salud", semestre: 3, año: 2, requisitos: [] },
  { id: "salud1", nombre: "Salud Pública I", semestre: 3, año: 2, requisitos: ["matematicas", "fundamentos"] },
  { id: "ingles2", nombre: "Inglés II", semestre: 3, año: 2, requisitos: ["ingles1"] },

  { id: "bromatologia", nombre: "Bromatología y Tecnología de Alimentos", semestre: 4, año: 2, requisitos: ["tecnicas", "higiene"] },
  { id: "fisiopato2", nombre: "Fisiopatología II", semestre: 4, año: 2, requisitos: ["fisiopato1"] },
  { id: "nutricion_humana", nombre: "Nutrición Humana", semestre: 4, año: 2, requisitos: ["fisiopato1"] },
  { id: "salud2", nombre: "Salud Pública II", semestre: 4, año: 2, requisitos: ["salud1", "psicologia"] },
  { id: "ingles3", nombre: "Inglés III", semestre: 4, año: 2, requisitos: ["ingles2"] },
  { id: "razonamiento", nombre: "Razonamiento Científico y TIC", semestre: 4, año: 2, requisitos: ["comunicacion"] },

  // --- AÑO 3 ---
  { id: "educacion", nombre: "Educación en Alimentación", semestre: 5, año: 3, requisitos: ["psicologia"] },
  { id: "evaluacion", nombre: "Evaluación Nutricional Ciclo de Vida", semestre: 5, año: 3, requisitos: ["fisiopato2", "nutricion_humana"] },
  { id: "vida", nombre: "Nutrición en el Ciclo de Vida", semestre: 5, año: 3, requisitos: ["fisiopato2", "nutricion_humana"] },
  { id: "investigacion", nombre: "Metodología de la Investigación", semestre: 5, año: 3, requisitos: ["salud2", "nutricion_humana"] },
  { id: "gestion", nombre: "Administración y Gestión en Salud", semestre: 5, año: 3, requisitos: ["salud2", "nutricion_humana"] },
  { id: "ingles4", nombre: "Inglés IV", semestre: 5, año: 3, requisitos: ["ingles3"] },

  { id: "dietoterapia", nombre: "Dietoterapia Adulto y Mayor", semestre: 6, año: 3, requisitos: ["evaluacion", "vida"] },
  { id: "proyectos", nombre: "Proyectos de Intervención", semestre: 6, año: 3, requisitos: ["evaluacion", "investigacion"] },
  { id: "farmacologia", nombre: "Farmacología en Nutrición", semestre: 6, año: 3, requisitos: ["vida", "ingles4"] },
  { id: "institucional1", nombre: "Alimentación Institucional I", semestre: 6, año: 3, requisitos: ["bromatologia", "vida"] },
  { id: "calidad1", nombre: "Gestión y Calidad I", semestre: 6, año: 3, requisitos: ["gestion"] },
  { id: "integrado1", nombre: "Integrado de Nutrición I", semestre: 6, año: 3, requisitos: ["educacion", "evaluacion", "vida"] },
  // --- AÑO 4 ---
  { id: "materno", nombre: "Dietoterapia Materno Infantil", semestre: 7, año: 4, requisitos: ["dietoterapia", "integrado1", "farmacologia"] },
  { id: "deporte", nombre: "Nutrición y Deporte", semestre: 7, año: 4, requisitos: ["materno"] },
  { id: "comunitaria1", nombre: "Nutrición Comunitaria I", semestre: 7, año: 4, requisitos: ["proyectos", "integrado1"] },
  { id: "institucional2", nombre: "Alimentación Institucional II", semestre: 7, año: 4, requisitos: ["institucional1"] },
  { id: "comunitaria2", nombre: "Nutrición Comunitaria II", semestre: 7, año: 4, requisitos: ["comunitaria1"] },
  { id: "calidad2", nombre: "Gestión y Calidad II", semestre: 7, año: 4, requisitos: ["calidad1"] },
  { id: "critico", nombre: "Pensamiento Crítico", semestre: 7, año: 4, requisitos: ["razonamiento"] },
  { id: "bioetica", nombre: "Bioética", semestre: 7, año: 4, requisitos: ["comunitaria1"] },

  { id: "innovacion", nombre: "Innovación Alimentaria", semestre: 8, año: 4, requisitos: ["institucional2", "calidad2"] },
  { id: "integrado2", nombre: "Integrado de Nutrición II", semestre: 8, año: 4, requisitos: ["materno", "comunitaria1", "institucional2"] },
  { id: "responsabilidad", nombre: "Responsabilidad Social", semestre: 8, año: 4, requisitos: ["critico"] },

  // --- AÑO 5 ---
  { id: "internado1", nombre: "Internado Clínico", semestre: 9, año: 5, requisitos: ["integrado2", "innovacion", "responsabilidad"] },
  { id: "internado2", nombre: "Internado Institucional", semestre: 9, año: 5, requisitos: ["integrado2", "innovacion", "responsabilidad"] },
  { id: "internado3", nombre: "Internado Comunitario", semestre: 9, año: 5, requisitos: ["integrado2", "innovacion", "responsabilidad"] },
];

const estado = {};

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  const años = [...new Set(ramos.map(r => r.año))];

  años.forEach(año => {
    const añoDiv = document.createElement("div");
    añoDiv.classList.add("año");
    añoDiv.innerHTML = `<h2>Año ${año}</h2>`;

    const fila = document.createElement("div");
    fila.classList.add("fila-semestres");

    const semestres = ramos.filter(r => r.año === año).map(r => r.semestre);
    const semestresUnicos = [...new Set(semestres)].sort((a, b) => a - b);

    semestresUnicos.forEach(sem => {
      const columna = document.createElement("div");
      columna.classList.add("semestre");
      columna.innerHTML = `<h3>Semestre ${sem}</h3>`;

      const ramosSemestre = ramos.filter(r => r.semestre === sem);

      ramosSemestre.forEach(ramo => {
        const requisitosCumplidos = ramo.requisitos.every(req => estado[req]);
        const desbloqueado = ramo.requisitos.length === 0 || requisitosCumplidos;

        const card = document.createElement("div");
        card.className = "card";
        card.classList.add(desbloqueado ? "unlocked" : "locked");
        card.id = ramo.id;

        card.innerHTML = `<strong>${ramo.nombre}</strong>
          ${ramo.requisitos.length ? `<br><small>Requiere: ${ramo.requisitos.map(id => ramos.find(r => r.id === id).nombre).join(", ")}</small>` : ""}`;

        if (desbloqueado) {
          card.addEventListener("click", () => {
            estado[ramo.id] = true;
            renderMalla();
          });
        }

        columna.appendChild(card);
      });

      fila.appendChild(columna);
    });

    añoDiv.appendChild(fila);
    container.appendChild(añoDiv);
  });
}

renderMalla();
