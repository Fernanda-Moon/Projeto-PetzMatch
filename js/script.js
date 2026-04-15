// ========== DADOS ==========
const petsData = [
    {
        id: 1,
        nome: 'Luna',
        tipo: 'Gato',
        sexo: 'Fêmea',
        raca: 'Preto',
        peso: 3.2,
        idade: '1 anos',
        local: 'Campina Grande, PB',
        descricao: 'Luna é uma gatinha que gosta de usar chapéus. De vez em quando ela olha para o vazio com seus grandes olhos, mas ela é fofinha.',
        fotos: ['img/luna.png.jpg', 'img/luna2.png.jpg', 'img/luna3.png.jpg'],
        dono: { nome: 'Fernanda Travassos', foto: 'img/avatar.png.jpg', telefone: '(83) 99609-8944' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 2,
        nome: 'Phainon',
        tipo: 'Cachorro',
        sexo: 'Macho',
        raca: 'Golden Retriever',
        peso: 32,
        idade: '2 anos',
        local: 'João Pessoa, PB',
        descricao: 'Phainon é um golden dócil, muito brincalhão e extremamente amigável. Perfeito para famílias.',
        fotos: ['img/golden.png.jpg'],
        dono: { nome: 'Cardan Greenbriar', foto: 'img/cardangreenbriar.png.jpg', telefone: '(83) 91234-5678' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 3,
        nome: 'Era',
        tipo: 'passaro',
        sexo: 'Fêmea',
        raca: 'Calopsita',
        peso: 0.1,
        idade: '1 ano',
        local: 'Campina Grande, PB',
        descricao: 'Era é uma calopsita muito cantora e sociável.',
        fotos: ['img/era.png.jpg'],
        dono: { nome: 'Alice Armstrong', foto: 'img/aliceAvatar.png.jpg', telefone: '(83) 99876-5432' },
        saude: { pedigree: false, exames: 'pendente', vacinas: 'necessário' }
    },
    {
        id: 4,
        nome: 'Bochechas',
        tipo: 'roedor',
        sexo: 'Fêmea',
        raca: 'Hamster Sírio',
        peso: 0.15,
        idade: '8 meses',
        local: 'Campina Grande, PB',
        descricao: 'Bolinha é um hamster muito ativo à noite e adora girar na rodinha e comer.',
        fotos: ['img/bochechas.png.jpg'],
        dono: { nome: 'Lucas Kaliel', foto: 'img/lucasAvatar.png.jpg', telefone: '(83) 98711-2233' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
    },
    {
        id: 5,
        nome: 'Bluy',
        tipo: 'passaro',
        sexo: 'Macho',
        raca: 'Passarinho azul',
        peso: 0.15,
        idade: '5 meses',
        local: 'Campina Grande, PB',
        descricao: 'Bluy é um passarinho muito amigável e carente, sempre pedindo carinho e ficando perto de sua mão!',
        fotos: ['img/sillyBlue.png.jpg'],
        dono: { nome: 'Lucas Kaliel', foto: 'img/lucasAvatar.png.jpg', telefone: '(83) 98711-2233' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 6,
        nome: 'Garfield',
        tipo: 'Gato',
        sexo: 'Macho',
        raca: 'Laranja',
        peso: 2,
        idade: '6 meses',
        local: 'João Pessoa, PB',
        descricao: 'Garfield é um gatinho filhote que gosta de usar roupinhas diferentes e fingir ser um CLT chamado "Tom".',
        fotos: ['img/garfield.png.jpg'],
        dono: { nome: 'Amy Farias', foto: 'img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 7,
        nome: 'Amora',
        tipo: 'Gato',
        sexo: 'Fêmea',
        raca: 'Siamês',
        peso: 3,
        idade: '9 meses',
        local: 'João Pessoa, PB',
        descricao: 'Amora é uma gatinha que ama quando escovam seu pelo. Gosta muito de ficar deitada em frames de janelas olhando a rua.',
        fotos: ['img/siames.png.jpg'],
        dono: { nome: 'Alice Armstrong', foto: 'img/aliceAvatar.png.jpg', telefone: '(83) 99876-5432' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 8,
        nome: 'Baltazar',
        tipo: 'Gato',
        sexo: 'Macho',
        raca: 'Branquinho',
        peso: 3,
        idade: '1 ano',
        local: 'Campina Grande, PB',
        descricao: 'Baltazar é um gatinho que gosta muito de acompanhar seus donos pela casa. Curioso e bem paciente com crianças.',
        fotos: ['img/homofobico.png.jpg'],
        dono: { nome: 'Fernanda Travassos', foto: 'img/avatar.png.jpg', telefone: '(83) 99609-8944' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 9,
        nome: 'Kaligula',
        tipo: 'Gato',
        sexo: 'Macho',
        raca: 'Laranjinha',
        peso: 2,
        idade: '4 meses',
        local: 'Campina Grande, PB',
        descricao: 'Kaligula é um gatinho filhote que gosta de brincar com bolinhas, principalmente felpudas e/ou de costura.',
        fotos: ['img/laranjinha.png.jpg'],
        dono: { nome: 'Fernanda Travassos', foto: 'img/avatar.png.jpg', telefone: '(83) 99609-8944' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'pendente' }
    },
    {
        id: 10,
        nome: 'Marry',
        tipo: 'Gato',
        sexo: 'Fêmea',
        raca: 'Branquinha',
        peso: 2,
        idade: '1 ano',
        local: 'João Pessoa, PB',
        descricao: 'Marry é uma gatinha que gosta, surpreendentemente, de tomar banho e comer comidas diferentes.',
        fotos: ['img/mary.png.jpg'],
        dono: { nome: 'Cardan Greenbriar', foto: 'img/cardangreenbriar.png.jpg', telefone: '(83) 91234-5678' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 11,
        nome: 'Heva',
        tipo: 'Cachorro',
        sexo: 'Fêmea',
        raca: 'Schnauzer',
        peso: 3,
        idade: '1 ano',
        local: 'João Pessoa, PB',
        descricao: 'Heva é uma cachorrinha que ama deitar sob a luz do sol no chão. Late bastante quando não conhece alguém, mas, ao fazer carinho, ela logo se derrete.',
        fotos: ['img/schnauzer.png.jpg'],
        dono: { nome: 'Amy Farias', foto: 'img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 12,
        nome: 'Pipoca',
        tipo: 'Cachorro',
        sexo: 'Macho',
        raca: 'Bichon frisé',
        peso: 2,
        idade: '6 meses',
        local: 'Campina Grande, PB',
        descricao: 'Pipoca é um cachorrinho muito pequeninho que gosta bastante de brincar e modiscar as coisas.',
        fotos: ['img/fluffy.png.jpg'],
        dono: { nome: 'Ravi Pierre', foto: 'img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 13,
        nome: 'Loki',
        tipo: 'Cachorro',
        sexo: 'Macho',
        raca: 'Boiadeiro de Berna',
        peso: 3,
        idade: '2',
        local: 'João Pessoa, PB',
        descricao: 'Loki é um cachorrinho muito peludo que gosta bastante de brincar com bolinhas e também que seu pelo seja escovado.',
        fotos: ['img/bernerse.png.jpg'],
        dono: { nome: 'Ravi Pierre', foto: 'img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 14,
        nome: 'Assutada Da Silva',
        tipo: 'Cachorro',
        sexo: 'Fêmea',
        raca: 'Capa Preta',
        peso: 5,
        idade: '2',
        local: 'Campina Grande, PB',
        descricao: 'Seu nome é Mel! Apesar do nome engraçadinho, Mel consegue ser bastante assustada e bem bricalhona, além de fazer coisas bobas para chamar a atenção dos donos.',
        fotos: ['img/assustadoDaSilva.png.jpg'],
        dono: { nome: 'Fernanda Travassos', foto: 'img/avatar.png.jpg', telefone: '(83) 99609-8944' },
        saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 15,
        nome: 'Joca',
        tipo: 'roedor',
        sexo: 'Macho',
        raca: 'Coelho',
        peso: 1,
        idade: '8 meses',
        local: 'João Pessoa, PB',
        descricao: 'Joca é um coelhinho com um temperamento calmo, além de comer, ele gosta bastante de tomar banhos e usar sua touquinha para cobrir suas orelhas.',
        fotos: ['img/coelhinhoskincare.png.jpg'],
        dono: { nome: 'Alice Armstrong', foto: 'img/aliceAvatar.png.jpg', telefone: '(83) 99876-5432' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'em dia' }
    },
    {
        id: 16,
        nome: 'Víbora',
        tipo: 'reptil',
        sexo: 'Fêmea',
        raca: 'Cobra do Milharal',
        peso: 0.9,
        idade: '3 anos',
        local: 'João Pessoa, PB',
        descricao:'Víbora é uma cobra do milharal de temperamento calmo e curioso. Adora explorar seu terrário e se enrolar em galhos. Apesar do nome intimidador, é completamente inofensiva e ótima para iniciantes no mundo dos répteis.',
        fotos: ['img/vibora1.png.jpg', 'img/vibora2.png.jpg'],
        dono: { nome: 'Cardan Greenbriar', foto: 'img/cardangreenbriar.png.jpg', telefone: '(83) 91234-5678' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
    },
    {
        id: 17,
        nome: 'Gekko',
        tipo: 'reptil',
        sexo: 'Macho',
        raca: 'Gecko Leopardo',
        peso: 0.06,
        idade: '1 ano e 6 meses',
        local: 'João Pessoa, PB',
        descricao:'Gekko é um gecko leopardo muito ativo e divertido de observar. Adora caçar grilos e se aquecer sob a luz de seu terrário. Seus olhos grandes e sua pele manchada fazem sucesso entre visitantes. Perfeito para quem busca um pet exótico de fácil cuidado.',
        fotos: ['img/gekko1.png.jpg', 'img/gekko2.png.jpg'],
        dono: { nome: 'Ravi Pierre', foto: 'img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
    },
    {
        id: 18,
        nome: 'SirFroggo',
        tipo: 'reptil',
        sexo: 'Macho',
        raca: 'Sapo Pac-Man',
        peso: 0.4,
        idade: '2 anos',
        local: 'João Pessoa, PB',
        descricao:'SirFroggo é um autêntico cavalheiro anfíbio: sempre elegante em seu terrário, ele aguarda pacientemente sua refeição como quem espera o chá das cinco. Apesar do apetite voraz e da boca descomunal, mantém uma pose digna e jamais perde a compostura – um verdadeiro lord entre os sapos Pac-Man. De hábitos tranquilos e baixa manutenção, é o companheiro perfeito para quem aprecia um toque de classe no mundo exótico.',
        fotos: ['img/sirFroggo.png.jpg'],
        dono: { nome: 'Ravi Pierre', foto: 'img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
    },
    {
        id: 19,
        nome: 'Goldie',
        tipo: 'peixe',
        sexo: 'Fêmea',
        raca: 'Peixe Dourado',
        peso: 0.2,
        idade: '1 ano e 3 meses',
        local: 'João Pessoa, PB',
        descricao:'Goldie é uma peixinha dourada de personalidade curiosa e brilhante como o próprio nome sugere. Está sempre nadando alegremente de um lado para o outro, reconhecendo seu tutor e até "dançando" na hora da comida. É a companheira aquática ideal para quem busca um pet calmo, colorido e fácil de cuidar – um verdadeiro raio de sol em forma de peixe.',
        fotos: ['img/goldenFish.png.jpg'],
        dono: { nome: 'Amy Farias', foto: 'img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
    },
    {
        id: 20,
        nome: 'Kaito',
        tipo: 'peixe',
        sexo: 'Macho',
        raca: 'Carpa Koi',
        peso: 1.2,
        idade: '5 anos',
        local: 'João Pessoa, PB',
        descricao: 'Kaito é uma carpa koi de beleza hipnotizante, com manchas vermelhas e brancas que mais parecem pinceladas de um artista japonês. Elegante e sereno, ele desliza pela água como um verdadeiro símbolo de perseverança e boa sorte. Adora ser admirado à distância e traz um ar de tranquilidade ao ambiente.',
        fotos: ['img/koiFish.png.jpg'],
        dono: { nome: 'Amy Farias', foto: 'img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
    },
    {
        id: 21,
        nome: 'Lebre de Março',
        tipo: 'roedor',
        sexo: 'Macho',
        raca: 'Fuzzy Lop',
        peso: 1.8,
        idade: '1 ano e 2 meses',
        local: 'Campina Grande, PB',
        descricao: 'A Lebre de Março é um coelhinho marrom de pelagem macia como algodão e orelhas que mais parecem um cachecol felpudo. Sempre atrasado para o chá (ou para a ração), ele tem um jeito estabanado e encantador que derrete qualquer coração. Adora dar pulinhos de alegria quando vê folhas frescas de hortelã e é um verdadeiro gentleman das tocas: educado, carinhoso e cheio de personalidade.',
        fotos: ['img/lebreMarco.png.jpg'],
        dono: { nome: 'Fernanda Travassos', foto: 'img/avatar.png.jpg', telefone: '(83) 99609-8944' },
        saude: { pedigree: false, exames: 'aprovado', vacinas: 'em dia' }
    }
];


// Usuário logado 
let usuarioLogado = {
    nome: 'Fernanda Travassos',
    email: 'fernanda.lua.travassos@gmail.com',
    telefone: '(83) 99609-8944',
    foto: 'img/avatar.png.jpg',
    pets: [1, 8, 9, 14, 21] // IDs dos pets (caso queira adicionar algum novo, add o número do ID aqui)
};


// ========== FUNÇÕES AUXILIARES ==========
function getPetById(id) {
    return petsData.find(p => p.id === parseInt(id));
}

function getPetsByTipo(tipo) {
    return petsData.filter(p => p.tipo.toLowerCase() === tipo.toLowerCase());
}

function gerarCardPet(pet) {
    return `
        <div class="col-6">
            <a href="detalhes-luna.html?id=${pet.id}" class="pet-card">
                <img src="${pet.fotos[0]}" alt="${pet.nome}" class="pet-card-img">
                <div class="pet-card-body">
                    <div class="pet-card-title">${pet.nome}</div>
                    <div class="pet-card-location">
                        <span class="material-icons" style="font-size:14px">location_on</span>
                        ${pet.local}
                    </div>
                </div>
            </a>
        </div>
    `;
}



// ========== PÁGINA HOME ==========
function carregarPetsDestaque() {
    const container = document.getElementById('featuredPetsContainer');
    if (!container) return;
    const idsCampina = [1, 3, 4, 5, 8, 9, 12, 14, 21];
    const petsCampina = petsData.filter(pet => idsCampina.includes(pet.id));
    if (petsCampina.length === 0) {
        container.innerHTML = '<p>Nenhum pet próximo no momento.</p>';
        return;
    }
    container.innerHTML = petsCampina.map(pet => gerarCardPet(pet)).join('');
}



// ========== PÁGINAS DE CATEGORIA ==========
function carregarPetsCategoria(tipo) {
    const container = document.getElementById('categoriaPetsContainer');
    if (!container) return;

    // Remove classes conflitantes do Bootstrap
    container.classList.remove('row', 'g-3');

    // Obtém os pets do tipo correto (case insensitive)
    const pets = petsData.filter(p => p.tipo.toLowerCase() === tipo.toLowerCase());
    console.log(`[DEBUG] ${tipo} - Total de pets:`, pets.length);

    // Função para renderizar
    function renderizar(filtro) {
        let selecionados = [];
        if (filtro === 'macho') {
            selecionados = pets.filter(p => p.sexo === 'Macho');
        } else if (filtro === 'femea') {
            selecionados = pets.filter(p => p.sexo === 'Fêmea');
        } else {
            selecionados = pets;
        }
        console.log(`[DEBUG] Filtro: ${filtro} -> ${selecionados.length} pets`);

        if (selecionados.length === 0) {
            container.innerHTML = '<div style="padding: 20px; text-align: center;">Nenhum pet encontrado.</div>';
            return;
        }

        // Gera os cards sem depender de classes externas
        container.innerHTML = selecionados.map(pet => `
            <div class="categoria-card-item">
                <a href="detalhes-luna.html?id=${pet.id}" class="pet-card">
                    <img src="${pet.fotos[0]}" alt="${pet.nome}" class="pet-card-img">
                    <div class="pet-card-body">
                        <div class="pet-card-title">${pet.nome}</div>
                        <div class="pet-card-location">
                            <span class="material-icons" style="font-size:14px">location_on</span>
                            ${pet.local}
                        </div>
                    </div>
                </a>
            </div>
        `).join('');
    }

    // Renderiza TODOS inicialmente
    renderizar('todos');

    // Configura os filtros (chips) com delegação de eventos segura
    const chipsContainer = document.querySelector('.filter-chips');
    if (!chipsContainer) return;

    // Remove listener antigo se existir
    if (chipsContainer._listener) {
        chipsContainer.removeEventListener('click', chipsContainer._listener);
    }

    const listener = function(event) {
        const chip = event.target.closest('.chip');
        if (!chip) return;
        const filtro = chip.getAttribute('data-filter');
        if (!filtro) return;

        // Atualiza classe active
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        renderizar(filtro);
    };

    chipsContainer.addEventListener('click', listener);
    chipsContainer._listener = listener;
}



// ========== PÁGINA EXPLORAR ==========
function carregarExplorar() {
    const container = document.getElementById('explorarPetsContainer');
    if (!container) return;
    
    function renderizar(filtroTipo = 'todos', filtroSexo = 'todos') {
        let pets = petsData;
        if (filtroTipo !== 'todos') pets = pets.filter(p => p.tipo.toLowerCase() === filtroTipo.toLowerCase());
        if (filtroSexo !== 'todos') pets = pets.filter(p => p.sexo === filtroSexo);
        container.innerHTML = pets.map(pet => gerarCardPet(pet)).join('');
    }
    
    renderizar();
    
    const filtroTipoEl = document.getElementById('filtroTipo');
    const filtroSexoEl = document.getElementById('filtroSexo');
    if (filtroTipoEl && filtroSexoEl) {
        filtroTipoEl.addEventListener('change', (e) => {
            renderizar(e.target.value, filtroSexoEl.value);
        });
        filtroSexoEl.addEventListener('change', (e) => {
            renderizar(filtroTipoEl.value, e.target.value);
        });
    }
}



// ========== PÁGINA DETALHES DO PET ==========
function carregarDetalhesPet() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const pet = getPetById(id);
    if (!pet) {
        document.getElementById('detalhesPetContainer').innerHTML = '<p>Pet não encontrado.</p>';
        return;
    }
    
    document.getElementById('petNomeHeader').textContent = pet.nome;
    
    const statusExames = pet.saude.exames === 'aprovado' ? 'status-aprovado' : (pet.saude.exames === 'pendente' ? 'status-pendente' : 'status-nao-realizado');
    const statusVacinas = pet.saude.vacinas === 'em dia' ? 'status-aprovado' : (pet.saude.vacinas === 'necessário' ? 'status-pendente' : 'status-nao-realizado');
    
    const html = `
        <div class="pet-gallery">
            <img src="${pet.fotos[0]}" alt="${pet.nome}" class="main-image" id="mainPetImage">
            <div class="thumbnail-container">
                ${pet.fotos.map((foto, i) => `
                    <img src="${foto}" alt="Foto ${i+1}" class="thumbnail" onclick="document.getElementById('mainPetImage').src='${foto}'">
                `).join('')}
            </div>
        </div>
        
        <h2>${pet.nome}</h2>
        <p class="location-text"><span class="material-icons">location_on</span> ${pet.local}</p>
        
        <div class="info-cards">
            <div class="info-card"><span class="label">Sexo</span><span class="value">${pet.sexo}</span></div>
            <div class="info-card"><span class="label">Idade</span><span class="value">${pet.idade}</span></div>
            <div class="info-card"><span class="label">Raça</span><span class="value">${pet.raca}</span></div>
            <div class="info-card"><span class="label">Peso</span><span class="value">${pet.peso} kg</span></div>
        </div>
        
        <div class="dono-card">
            <div class="dono-info">
                <img src="${pet.dono.foto}" alt="${pet.dono.nome}" class="dono-foto">
                <span class="dono-nome">${pet.dono.nome}</span>
            </div>
            <div class="dono-actions">
                <span class="material-icons">chat_bubble</span>
                <span class="material-icons">phone</span>
            </div>
        </div>
        
        <p class="pet-descricao">${pet.descricao}</p>
        
        <div class="health-section">
            <h3>Documentos e Saúde</h3>
            <div class="health-item">
                <span>Pedigree</span>
                ${pet.saude.pedigree ? '<a href="#"><span class="material-icons">picture_as_pdf</span> Ver PDF</a>' : '<span>Não disponível</span>'}
            </div>
            <div class="health-item">
                <span>Exames</span>
                <span class="status-badge ${statusExames}">${pet.saude.exames}</span>
            </div>
            <div class="health-item">
                <span>Vacinas</span>
                <span class="status-badge ${statusVacinas}">${pet.saude.vacinas}</span>
            </div>
        </div>
    `;
    
    document.getElementById('detalhesPetContainer').innerHTML = html;
}



// ========== PÁGINA PERFIL ==========
function carregarPerfil() {
    const nomeEl = document.getElementById('perfilNome');
    const telEl = document.getElementById('perfilTelefone');
    const avatarEl = document.querySelector('.profile-avatar-large img');
    if (nomeEl) nomeEl.textContent = usuarioLogado.nome;
    if (telEl) telEl.textContent = usuarioLogado.telefone;
    if (avatarEl) avatarEl.src = usuarioLogado.foto;
    
    const container = document.getElementById('meusPetsContainer');
    if (container) {
        const meusPets = petsData.filter(p => usuarioLogado.pets.includes(p.id));
        container.innerHTML = meusPets.map(pet => gerarCardPet(pet)).join('');
    }
}



// ========== CADASTRO DE PET ==========
const cadastroPetForm = document.getElementById('cadastroPetForm');
if (cadastroPetForm) {
    // Preview da foto do dono
    const donoFotoInput = document.getElementById('donoFotoInput');
    const previewDono = document.getElementById('previewDono');
    const donoFileName = document.getElementById('donoFileName');
    if (donoFotoInput) {
        donoFotoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                previewDono.src = URL.createObjectURL(file);
                previewDono.style.display = 'block';
                donoFileName.textContent = file.name;
            } else {
                previewDono.style.display = 'none';
                donoFileName.textContent = 'Nenhum arquivo escolhido';
            }
        });
    }

    // Preview das fotos do pet
    const petFotosInput = document.getElementById('petFotosInput');
    const previewPet = document.getElementById('previewPet');
    const petFileName = document.getElementById('petFileName');
    if (petFotosInput) {
        petFotosInput.addEventListener('change', function(e) {
            previewPet.innerHTML = '';
            const files = Array.from(e.target.files);
            if (files.length > 0) {
                petFileName.textContent = `${files.length} arquivo(s) selecionado(s)`;
                files.forEach(file => {
                    const img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    previewPet.appendChild(img);
                });
            } else {
                petFileName.textContent = 'Nenhum arquivo escolhido';
            }
        });
    }

    cadastroPetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Verifica se todos os campos obrigatórios estão preenchidos
        const donoNome = document.getElementById('donoNome').value.trim();
        const donoNasc = document.getElementById('donoNasc').value;
        const donoLocal = document.getElementById('donoLocal').value.trim();
        const petNome = document.getElementById('petNome').value.trim();
        const petTipo = document.getElementById('petTipo').value;
        const petSexo = document.getElementById('petSexo').value;
        const petRaca = document.getElementById('petRaca').value.trim();
        const petPeso = document.getElementById('petPeso').value;
        const petNasc = document.getElementById('petNasc').value;
        const petDesc = document.getElementById('petDesc').value.trim();

        function calcularIdade(dataNasc) {
            const hoje = new Date();
            const nasc = new Date(dataNasc);
            let idade = hoje.getFullYear() - nasc.getFullYear();
            const mes = hoje.getMonth() - nasc.getMonth();
            if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
                idade--;
            }
            return idade + ' anos';
        }
        
        if (!donoNome || !donoNasc || !donoLocal || !petNome || !petTipo || !petSexo || !petRaca || !petPeso || !petNasc || !petDesc) {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        // Processa fotos do pet (máximo 3 para exemplo)
        const petFotos = [];
        const files = petFotosInput ? petFotosInput.files : [];
        for (let i = 0; i < Math.min(files.length, 3); i++) {
            petFotos.push(URL.createObjectURL(files[i]));
        }
        if (petFotos.length === 0) {
            petFotos.push('https://placedog.net/400/400?id=' + Date.now());
        }

        // Processa foto do dono
        let donoFoto = 'https://i.pravatar.cc/150?img=1';
        if (donoFotoInput && donoFotoInput.files[0]) {
            donoFoto = URL.createObjectURL(donoFotoInput.files[0]);
        }

        // Cria novo pet
        const novoPet = {
            id: petsData.length + 1,
            nome: petNome,
            tipo: petTipo,
            sexo: petSexo,
            raca: petRaca,
            peso: parseFloat(petPeso),
            idade: calcularIdade(petNasc),
            local: donoLocal,
            descricao: petDesc,
            fotos: petFotos,
            dono: {
                nome: donoNome,
                foto: donoFoto,
                telefone: '(83) 99999-9999'
            },
            saude: { pedigree: false, exames: 'nao realizado', vacinas: 'necessário' }
        };

        petsData.push(novoPet);
        usuarioLogado.pets.push(novoPet.id);
        alert('Pet cadastrado com sucesso!');
        window.location.href = 'perfil.html';
    });
}



// ========== MODAIS DE LOGIN/CADASTRO (index.html) ==========
document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('loginModal');
    const cadastroModal = document.getElementById('cadastroModal');
    const btnEntrar = document.getElementById('btnEntrar');
    const btnCadastrar = document.getElementById('btnCadastrar');
    const closeLogin = document.getElementById('closeLoginModal');
    const closeCadastro = document.getElementById('closeCadastroModal');
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');

    // Abrir modal de login
    if (btnEntrar && loginModal) {
        btnEntrar.addEventListener('click', () => loginModal.showModal());
    }
    if (closeLogin && loginModal) {
        closeLogin.addEventListener('click', () => loginModal.close());
    }
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            if (email) {
                usuarioLogado.email = email;
                window.location.href = 'home.html';
            }
        });
    }

    // Abrir modal de cadastro
    if (btnCadastrar && cadastroModal) {
        btnCadastrar.addEventListener('click', () => cadastroModal.showModal());
    }
    if (closeCadastro && cadastroModal) {
        closeCadastro.addEventListener('click', () => cadastroModal.close());
    }
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const senha = document.getElementById('cadSenha').value;
            const confirm = document.getElementById('cadConfirmSenha').value;
            if (senha !== confirm) {
                alert('Senhas não coincidem!');
                return;
            }
            usuarioLogado.nome = document.getElementById('cadNome').value;
            usuarioLogado.email = document.getElementById('cadEmail').value;
            window.location.href = 'home.html';
        });
    }
});


// Logout
function logout() {
    if (confirm('Sair da conta?')) {
        window.location.href = 'index.html';
    }
}


// Arrow function exemplo
const initApp = () => console.log('PetzMatch carregado!');
initApp();