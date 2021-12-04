<template>
  <div class="contact__form">
    <form
      name="contact"
      action="/thanks"
      method="POST"
      netlify
      netlify-honeypot="bot-field"
      class="form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="form__group">
        <label for="name" class="form__label">Full Name</label>

        <input
          id="name"
          type="text"
          name="name"
          class="form__input"
          placeholder="John Doe"
          required
        />
      </div>
      <div class="form__group">
        <label for="email" class="form__label">Email Address</label>

        <input
          id="email"
          type="email"
          name="email"
          class="form__input"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>

      <div class="form__group">
        <label for="projectDescription" class="form__label">Project Information</label>
        <textarea
          name="projectDescription"
          id="why"
          rows="5"
          class="form__input"
          placeholder="Please include as much detail as possible regarding your project."
        ></textarea>
      </div>

      <div class="form__group">
        <button type="submit" class="btn">Book Now</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section__contact-form {
  background-image: linear-gradient(
    to right,
    rgba($black, 0.3) 0%,
    rgba($black, 0.3) 100%
  );
  // url('../assets/img/lake-hero.jpg');
  background-size: cover;
  background-position: center;
  @include respond(tab-port) {
    padding: 10rem 0;
  }
  @include respond(phone) {
    padding: 2rem 0;
  }
}
.contact {
  background: rgba($white, 0.5);
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($black, 0.2);
  display: flex;
  @include respond(small-tab) {
    flex-direction: column;
  }
  // @include respond(tab-port) {
  //   background-image: linear-gradient(
  //       to right,
  //       rgba($white, 0.9) 0%,
  //       rgba($white, 0.9) 100%
  //     ),
  //     url('../assets/img/lake-hero.jpg');
  // }
  &__form {
    @apply rounded-xl;
    // flex: 40%;
    padding: 4rem;
    background: white;
    border-bottom: 1rem solid $secondary-color;
    @include respond(phone) {
      padding: 2rem;
    }
  }
  &__info {
    &--box {
      background: rgba($primary-color, 0.8);
      padding: 4rem;
      flex: 60%;
      .heading-secondary {
        color: $secondary-color;
      }
      p {
        color: $white;
      }
    }
  }
}
.form {
  .btn {
    background: $secondary-color;
    font-size: $default-font-size;
    border: none;
  }
  &__group {
    margin-bottom: 1rem;
  }
  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    background-color: lighten($grey, 5%);
    border: none;
    border-bottom: 3px solid transparent;
    color: inherit;
    width: 100%;
    display: block;
    transition: all 0.3s;
    @include respond(tab-port) {
      width: 100%;
    }
    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($black, 0.1);
      border-bottom: 3px solid $secondary-color;
    }
    &:focus:invalid {
      border-bottom: 3px solid $secondary-color-dark;
    }
    &::-webkit-input-placeholder {
      color: rgba($font-color, 0.5);
    }
  }

  &__label {
    font-size: 3rem;
    // margin-left: 2rem;
    // margin-bottom: 2rem;
    margin: 1rem 0 1rem 2rem;
    display: inline-block;
    // transition: all 0.3s;
  }
}
</style>
