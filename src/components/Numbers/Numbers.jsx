import "./Numbers.scss";

export const Numbers = () => {
  return (
    <section id="about" class="numbers">
      <div className="numbers-container">
        <h6 className="numbers-title">Про клініку в цифрах (2022)</h6>
        <div className="cards-container">
          <div className="cards-about" id="feedback">
            <div>
              <h1>13 700</h1>
              <p>щасливих пацієнтів</p>
            </div>
          </div>
          <div className="cards-about" id="vaccinations">
            <div>
              <h1>568</h1>
              <p>вакцинацій</p>
            </div>
          </div>
          <div className="cards-about" id="researches">
            <div>
              <h1>1 247</h1>
              <p>лабораторних досліджень</p>
            </div>
          </div>
          <div className="cards-about" id="seniority">
            <div>
              <h1>+10</h1>
              <p>років турботи про Ваших малят</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
