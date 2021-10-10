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
          placeholder="Full Name"
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
          placeholder="Email Address"
          required
        />
      </div>
      <div class="form__group">
        <label for="businessName" class="form__label">Business Name</label>

        <input
          id="businessName"
          type="text"
          name="businessName"
          class="form__input"
          placeholder="Business Name"
          required
        />
      </div>

      <div class="form__group text-white">
        <div class="form__radio--group">
          <input type="radio" class="form__radio-input" id="web-design" name="service" />
          <label for="web-design" class="form__radio-label">
            <span class="form__radio-button"></span>
            Web Design
          </label>
        </div>
        <div class="form__radio--group">
          <input type="radio" class="form__radio-input" id="review-management" name="service" />
          <label for="review-management" class="form__radio-label">
            <span class="form__radio-button"></span>
            Review Lead Reputation Management
          </label>
        </div>
        <div class="form__radio--group">
          <input type="radio" class="form__radio-input" id="brand-logo-desing" name="service" />
          <label for="brand-logo-desing" class="form__radio-label">
            <span class="form__radio-button"></span>
            Brand Logo Design
          </label>
        </div>
      </div>
      <!-- <div class="form__group">

        <label for="services" class="form__label">Choose Service</label>

        <select name="service" id="service" class="form__select" required>
          <option value="n/a" disabled>
            What type of service are you interested in?
          </option>
          <option value="Web Design">Web Design</option>
          <option value="Brand & Logo Desing">Brand &amp; Logo Design</option>
          <option value="Review Lead Reputation Management">
            Review Lead Reputation Management
          </option>
        </select>
      </div> -->

      <div class="form__group">
        <label for="projectDescription" class="form__label"
          >Project Information</label
        >
        <textarea
          name="projectDescription"
          id="why"
          rows="10"
          class="form__input"
          placeholder="Please include as much detail as possible regarding your project."
        ></textarea>
        
      </div>

      <div class="form__group">
        <button type="submit" class="btn btn-primary">Book Now</button>
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
    flex: 40%;
    padding: 4rem;
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
    border-radius: 2px;
    background-color: rgba($white, 0.5);
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
      color: $black;
    }
  }
 
  &__label {
    font-size: 3rem;
    // margin-left: 2rem;
    // margin-bottom: 2rem;
    margin: 3rem 0 2rem 2rem;
    display: inline-block;
    // transition: all 0.3s;
    color: $white;
  }
  // &__input:placeholder-shown + &__label {
  //   opacity: 0;
  //   visibility: hidden;
  //   transform: translateY(4rem);
  // }

   &__radio--group {
            // width: 30%;
            display: inline-block;
            margin: 2rem;

            @include respond (tab-port) {
                  width: 100%;
                  margin-bottom: 2rem;
            }
      }

      &__radio-input {
            display: none;
      }

      &__radio-label {
            font-size: $default-font-size;
            cursor: pointer;
            position: relative;
            padding-left: 4rem;
      }

      &__radio-button {
            height: 3rem;
            width: 3rem;
            border: 5px solid $secondary-color;
            border-radius: 50%;
            display: inline-block;
            position: absolute;
            left: 0;
            top: -.4rem;

            &::after {
                  content: "";
                  @include absCenter;
                  display: block;
                  height: 1.3rem;
                  width: 1.3rem;
                  border-radius: 50%;
                  background-color: $secondary-color;
                  opacity: 0;
                  transition: opacity .2s;
            }
      }
  &__radio-input:checked ~ &__radio-label &__radio-button::after {
    opacity: 1;
  }
}
</style>
