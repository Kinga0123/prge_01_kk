import React, { useState } from "react";
import "./About.css";

function About() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="about">
      <label class="switch">
        <input type="checkbox" onClick={() => handleToggle()} />
      </label>
      <h1>O projekcie</h1>
      <div className="about_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend
        purus sed metus viverra, eget luctus erat mattis. Nullam pharetra quam
        et urna fermentum eleifend. Praesent a neque justo. Sed molestie est
        ligula, in blandit mauris rutrum sit amet.{" "}
        <span className={toggle ? "about_text__span_a" : "about_text__span_b"}>
          Morbi semper
        </span>
        , neque a fermentum ullamcorper, est dolor lacinia lorem, eu consectetur
        velit mi at orci. Aliquam erat volutpat. Maecenas tristique in ex non
        suscipit. Aliquam non libero eget lacus euismod commodo. Aliquam nisl
        libero, vulputate at tristique ac, accumsan ac tortor. Donec consectetur
        ligula dolor, eu iaculis odio elementum eget. Sed eget dui nisi.
        Maecenas vitae molestie eros. Vestibulum lobortis lacus eu metus
        pulvinar fringilla. Maecenas ac nisi ultrices, elementum est non, porta
        felis. Mauris quis condimentum risus. Sed et hendrerit nisi, et lacinia
        elit. Donec consequat massa quis eros laoreet sollicitudin. Vestibulum
        imperdiet porta lacus. Curabitur vel fermentum risus, et consequat
        justo. Praesent nunc nisl, posuere vel imperdiet sit amet, congue eu
        elit. Donec id odio scelerisque, auctor magna non, volutpat dolor. Duis
        tincidunt enim sit amet molestie posuere. Etiam at semper diam. Vivamus
        ut pulvinar elit, at luctus massa. Ut lobortis mi at facilisis
        tincidunt. Aenean vel porttitor enim. Quisque venenatis mattis lacus vel
        efficitur. Sed sed orci id erat auctor volutpat vitae sit amet ligula.
        Fusce eget turpis vulputate, lobortis eros vitae, sodales arcu. Maecenas
        vel nunc non ex vestibulum feugiat. Nulla gravida ipsum eros, quis
        vestibulum neque imperdiet et. Proin at lorem quam. Suspendisse ac
        finibus mi. Donec pellentesque iaculis accumsan. Duis at placerat
        tortor. Vivamus ac egestas mi. Curabitur in justo vel erat euismod
        ultricies at eget orci. Duis elementum id dui eu fringilla. Cras
        commodo, magna eu scelerisque elementum, purus diam aliquam metus, vel
        porta justo tellus quis ligula. Sed congue eget nulla ut efficitur.
        Etiam rutrum odio nec lorem suscipit tristique. Nullam sit amet elit
        interdum, dictum urna nec, dapibus diam. Praesent tempor convallis orci,
        nec dignissim turpis. Suspendisse potenti. Nunc vel neque ac ex
        tristique aliquet quis vel diam. Nunc sit amet urna ut ex pretium
        ultricies nec ut dolor. Donec nibh sapien, pretium ut risus sed,
        ultricies congue nisi. Vestibulum vel tellus felis. Phasellus quis
        consectetur arcu. Integer cursus urna neque, quis maximus mi interdum
        ullamcorper. Mauris imperdiet aliquam neque. Quisque non lacus sit amet
        diam congue efficitur a eget dui. Nullam urna odio, vulputate nec
        efficitur id, tempus eu mi. Pellentesque egestas ex non laoreet varius.
        Suspendisse potenti. Ut et risus at urna elementum porta eu at nunc.
        Vestibulum ultrices viverra blandit. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Quisque ut ipsum pulvinar, placerat tortor vel, fringilla sapien. Morbi
        dapibus ante nec cursus vehicula. Donec ac urna vehicula, imperdiet nisl
        a, vestibulum lectus. Quisque interdum nibh eros, quis faucibus est
        ultricies sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Phasellus semper dui id felis ultricies, eget laoreet dolor
        tincidunt. Donec facilisis bibendum varius. Cras auctor scelerisque
        ligula, et rhoncus purus. Quisque nec odio id elit rhoncus molestie sit
        amet sit amet ex. Aliquam erat volutpat. Aenean rhoncus tempus rhoncus.
        In non ultricies velit. Proin iaculis aliquet enim vel maximus. Aenean
        ac mi eget sem congue consectetur placerat quis lectus. Suspendisse
        pretium lacinia mauris vitae blandit. Vivamus pharetra mollis arcu, ut
        volutpat leo dignissim a. In molestie malesuada mi a luctus. Nullam
        accumsan ligula vehicula lectus egestas, in pellentesque tortor
        placerat. Duis vel blandit metus. Duis congue mauris lorem, condimentum
        dapibus ipsum efficitur quis. Duis dignissim vehicula pulvinar. In hac
        habitasse platea dictumst. Maecenas ut turpis lorem. Cras porttitor
        feugiat justo, non aliquam erat ullamcorper id. Duis erat nunc,
        venenatis ut purus eget, auctor ullamcorper libero. Duis a egestas nisl,
        sed auctor lorem. Suspendisse gravida, lorem id congue faucibus, quam
        purus condimentum neque, ut sagittis felis erat sit amet ante. Curabitur
        porttitor tristique nisi sed mollis. Etiam et finibus urna, a
        sollicitudin diam. Mauris pulvinar luctus mauris sed lacinia.
        Pellentesque nisl velit, fermentum nec lacus ut, elementum hendrerit
        ante. Mauris eros turpis, venenatis nec massa in, sagittis ullamcorper
        quam. Nullam eget varius turpis. Suspendisse semper sem et nunc luctus
        viverra vitae ac tortor. Aenean metus turpis, auctor vitae turpis in,
        placerat volutpat nibh. Vestibulum tempor lorem tincidunt lectus
        accumsan, sit amet eleifend velit fringilla. Quisque vel ligula leo.
        Vestibulum eget ipsum orci. Vestibulum nec aliquam lectus, ultricies
        faucibus tortor. In arcu orci, malesuada nec sollicitudin id, consequat
        eu nisl. Etiam faucibus lobortis orci, sed venenatis nunc viverra vel.
        Vestibulum eleifend enim non faucibus finibus. Curabitur vitae ligula
        imperdiet, consequat metus nec, efficitur mauris. Maecenas vel tempor
        dui. Maecenas ipsum orci, porta in lorem vitae, iaculis faucibus turpis.
        In et velit eget ligula dignissim congue sed vel odio. Nulla et
        ultricies nulla, eu varius lacus. Cras pharetra placerat massa. Aenean
        vitae augue a tortor pretium pulvinar. Vivamus quam neque, viverra
        semper lacus eget, ullamcorper vestibulum est. Nulla volutpat placerat
        tempus. Praesent ut egestas turpis. Maecenas vehicula nibh ut faucibus
        luctus. Duis mollis et nulla eget pharetra. Nunc tristique leo id diam
        imperdiet malesuada. Praesent faucibus nunc at lobortis condimentum.
        Cras euismod tortor est, a venenatis metus venenatis vitae. Fusce a mi
        mollis, tempor ante in, euismod leo.
      </div>
    </div>
  );
}

export default About;
