import React from "react";
import { Card } from 'antd';
import { Link, withRouter } from "react-router-dom";

function MainPage() {

  return (
    <Card title="Proje Hakkında" bordered>
      <p>
        Merhaba,<br />
        Temel hatları ile basit bir React projesi oluşturdum.<br />
        Projeyi menüde bulunan <Link to="/products">Ürünler</Link> sekmesinden inceleyebilirsiniz.
      </p>
      <h3>Klasör Yapısı</h3>
      <ul>
        <li>
          <strong>components </strong> Proje içerisinde kullanılan bileşenler bu dizin altına eklenmelidir. Her Entity için ayrı bir klasör açarak düzen sağlanılabilir.
        </li>
        <li>
          <strong>config </strong> Routing ve env proje genelinde kullanılan genel ayarlar bu dizin altına eklenir.
        </li>
        <li>
          <strong>constants </strong> Proje içerisinde bulunan sabitlerdir. Örneğin tablolara ait sütunlar bu dizinde tutulabilir.
        </li>
        <li>
          <strong>layouts </strong> Projeye ait arayüz bileşenleri bu dizinde tutulabilir. Kapsamlı projelerde bir kaç farklı header/foter tasarımı olabileceğinden dolayı ayrı konumlandırılır.
        </li>
        <li>
          <strong>pages </strong> Route'a eklediğimiz sayfaların tasarımlarını içerir. Bu klasör altında bileşen (component) yazmamaya gayret edilmelidir. Bu klasörün amacı components klasörü altındaki bileşenleri kullanarak sayfa tasarımı hazırlamak ve servis bağlantıları gibi işleri halletmektir.
        </li>
        <li>
          <strong>services </strong> Web API ile bağlantı kurmamızı sağlayan servis fonksiyonları bu dizine eklenmelidir.
          Servislerin değişme potansiyeli yüksek olduğu için <u>pages</u> veya <u>components</u> klasörü içerisinde hard-coded yazılmamalıdır. Backend'de bulunan her controller için ayrı bir servis dosyası oluşturulup tek bir noktadan kullanılmalıdır.
        </li>
      </ul>
    </Card>
  );
}

export default withRouter(MainPage);
