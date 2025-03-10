<script setup>
</script>

<template>

  <header>
    <a><router-link to="/caccom"><img src="/src/assets/logo-sem-fundo.png" alt="Logo CACCOM"> </router-link></a>
    <nav>
      <a class="active"><router-link to="/caccom"> Caccom </router-link></a>
      <a><router-link to="/empresajunior"> Empresa Júnior </router-link></a>
      <a><router-link to="/associacaoegressos"> Associação de egressos </router-link></a>
      <a class="contact" href="#">Meu contato</a>
    </nav>      
  </header>

  <main>
    <section class="home">
      <div>
        <h1>Bem vindo</h1>
        <p>O <span>Centro Acadêmico de Ciência da Computação</span> da Universidade Estadual de Maringá é o ponto de encontro e representatividade dos estudantes do curso. Somos uma entidade estudantil dedicada a fortalecer a comunidade acadêmica, promover a integração entre os alunos e ser a ponte entre o corpo discente, a coordenação do curso e a universidade.</p>
   
        <p><span>Nosso objetivo</span> é proporcionar um ambiente colaborativo, onde ideias inovadoras ganham vida e a troca de conhecimento é constante. Organizamos eventos, workshops, palestras e competições que incentivam o aprendizado prático, a pesquisa e o desenvolvimento de habilidades técnicas e interpessoais.</p>
  
        <p>Além disso, atuamos ativamente na defesa dos interesses dos estudantes, buscando melhorias no curso, na infraestrutura e apoiando iniciativas que impulsionem a formação acadêmica e profissional. Acreditamos que a universidade é um espaço de transformação, e estamos aqui para contribuir para o crescimento de cada aluno, tanto dentro quanto fora da sala de aula. </p>
  
        <p>Seja você calouro ou veterano, o CACCOM é sua casa! Participe, compartilhe suas ideias e ajude-nos a construir uma comunidade cada vez mais forte, conectada e preparada para os desafios do mundo da tecnologia.</p>
  
        <p>Juntos, vamos além do código! 🚀</p>

      </div>
  
      <div class="img-box">
        <img src="../assets/logo.webp"  alt="Foto de perfil">
      </div>
  
    </section>

    <section class="location">
      <div class="about-img">
        <img src="../assets/logo.webp" alt="Foto de perfil">
      </div>
      <div class="about-content">
  
        <h2> Sobre nossa <span>Localização</span></h2>
  
        <p >O <span>Centro Acadêmico de Ciência da Computação</span> (CACCOM) está localizado na cidade de Maringá, Paraná, dentro do campus sede da UEM. Nosso centro fica no Departamento de Informática (DIN), um ambiente voltado à pesquisa, inovação e formação de profissionais qualificados para o mercado de tecnologia.</p>
  
        <p>📍 Endereço: Bloco C56, Av. Brasil — Vila Esperança, Maringá - PR</p>
       
        <a href="https://maps.app.goo.gl/r6eHRHkuW8iKCvWB7"class="btn-2">Endereço</a>
      </div>
    </section>
  
    <!-- <section class="project">
      <h1>Projetos desenvolvidos</h1>
    </section> -->

    <footer class="footer">
      <div class="social">
        <a href="https://www.instagram.com/_lucalvex/"><i class='bx bxl-instagram-alt'></i></a>
      </div>
      <ul class="list">
        <li>
          <a href="#">Fale comigo</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
      <p class="copyright">© 2025 CACCOM | Todos os direitos são reservados </p>
    </footer>
  </main>
  
</template>

<style scoped>

  :root {
    --red-flame: #f90404;       
    --blush-rose: #f17c7e;      
    --dark-crimson: #ac1414;     
    --muted-rose: #b15c5c;       
    --soft-silver: #c4c4c4;    
  }

  main .home {
    width: 100%;
    min-height: 100vh;
    background-color: var(--soft-silvere);
    display: flex;
    align-items: center;
    gap:7em;
    padding: 160px 12% 0;
    margin-bottom: 20px;
  }

  main .home div {
    width: 700px;
  }

  main .home div h1 {
    font-size: 62px;
    line-height: 1.2;
  }

  main .home div p,
  main .location .about-content p {
    font-size: 18px;
    margin: 25px 0 30px;
    text-align: justify;
  }

  main .home div p span {
    font-weight: bold;
  }

  main .home div p span, 
  main .location .about-content span, 
  main .project span {
    color: black;
  }

  main .location .about-content a,
  main .project input {
    width: 200px;
    padding: 15px 10px;
    background-color: black;
    color: white;
    border: 2px solid transparent;
    border-radius: 8px;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 600;
    transition: 0.3s ease;
    cursor: pointer;
  }

  main .home .img-box img {
    border-radius: 50%;
  }

  main .location {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12% 8%;
    gap: 10em;
    background: gray;

  }

  main .location .about-img img {
    box-shadow: 0 0 25px black, 0 0 50px black;
    border-radius: 50%;
  }

  main .location .about-content h2 {
    color: white;
    font-size: 42px;
  }

  main .location .about-content p {
    color: white;
  }

  main .location .about-content a {
    margin-top: 70px;
    background-color: black;
  }

  main .location .about-content a:hover {
    background-color: white;
    color: black;
  }

</style>
