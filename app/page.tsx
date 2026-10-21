const levels = ["A1", "A2", "B1", "B2", "C1"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">kelime<span>.</span></div>
        <div className="navActions">
          <button className="ghost">Giriş yap</button>
          <button className="primary small">Ücretsiz başla</button>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">İNGİLİZCE KELİME ÖĞRENMENİN AKILLI YOLU</div>
        <h1>Ezberleme.<br/><em>Gerçekten öğren.</em></h1>
        <p>Her gün seviyene uygun yeni kelimeler öğren. Unutmaya başladığın anda tekrar et. İlerlemeni gör.</p>
        <div className="heroActions">
          <button className="primary">Öğrenmeye başla →</button>
          <span>Ücretsiz · Kredi kartı gerekmez</span>
        </div>
      </section>

      <section className="preview">
        <div className="studyCard">
          <div className="cardTop"><span>Bugünün kelimesi</span><b>A2</b></div>
          <div className="word">improve</div>
          <div className="phonetic">/ɪmˈpruːv/</div>
          <div className="meaning">geliştirmek, iyileştirmek</div>
          <div className="example">“I want to <strong>improve</strong> my English.”<small>İngilizcemi geliştirmek istiyorum.</small></div>
          <button className="know">Bunu biliyorum ✓</button>
        </div>
        <div className="streak"><strong>🔥 12</strong><span>günlük seri</span></div>
      </section>

      <section className="features">
        <div><b>01</b><h3>Seviyene göre öğren</h3><p>A1'den C1'e kadar seviyene uygun kelimelerle ilerle.</p><div className="levels">{levels.map(l => <span key={l}>{l}</span>)}</div></div>
        <div><b>02</b><h3>Tam zamanında tekrar et</h3><p>Spaced repetition sistemi, unutmak üzere olduğun kelimeleri doğru zamanda karşına çıkarır.</p></div>
        <div><b>03</b><h3>İlerlemeni gör</h3><p>Öğrendiğin kelimeleri, serini ve gelişimini tek ekrandan takip et.</p></div>
      </section>
    </main>
  );
}
