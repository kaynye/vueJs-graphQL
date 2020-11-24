<template>
  <div class="hello">
    <div>
      <b-alert :show="popupCreate.showMessageCreate" dismissible @dismissed="popupCreate.showMessageCreate=0" @dismiss-count-down="countDownChangedCreate" variant="success"><a href="#" class="alert-link">L'   {{ popupCreate.newUser }} à bien eté crée , message disparais dans {{ popupCreate.showMessageCreate }} s</a></b-alert>
      <b-alert :show="popupErreur.showMessageError" dismissible @dismissed="popupErreur.showMessageError=0" @dismiss-count-down="countDownChangedError" variant="danger">Une erreur est survenue, veuillez réesayer</b-alert>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1"  label="Nom" label-for="input-1" >
        <b-form-input  id="input-1"  v-model="form.firstname"  type="text"  required placeholder="Nom de l'utilisateur" ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2"  label="Prenom" label-for="input-1" >
        <b-form-input  id="input-2"  v-model="form.lastname"  type="text"  required placeholder="Prenom de l'utilisateur" ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3"  label="Email" label-for="input-1" >
        <b-form-input  id="input-3"  v-model="form.email"  type="email"  required placeholder="email" ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6"  label="Mot de passe" label-for="input-1"   >
        <b-form-input  id="input-6"  v-model="form.password"  type="password"  required ></b-form-input>
      </b-form-group>


        
      <b-form-group label="Role de l'utilisateur">
          <b-form-radio-group
                id="radio-group-1"
                v-model="selected"
                :options="roles"
                name="radio-options"
              ></b-form-radio-group>
          </b-form-group>

      <b-form-group id="input-group-5">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-5">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <div>
          <b-form-select v-model="form.classroom" :options="classrooms"></b-form-select>
          <div class="mt-3">Selected: <strong>{{ classroom }}</strong></div>
      </div>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    data() {
      return {
        form: {
          email: '',
          firstname: '',
          lastname: '',
          
          
          classroom: "",
          
          password: "passwords",
          checked: []
        },
        roles: [
            { text: 'Eleve', value: 'ELEVE' },
            { text: 'Proffesseur', value: 'PROFFESSEUR' },
            { text: 'Administrateur', value: 'ADMINISTRATEUR' },
          ],
        selected:'ELEVE',
        popupCreate:{
          newUser:'',
          dismissSecs: 5,
          showMessageCreate: 0
        },
        popupErreur:{
          dismissSecs: 5,
          showMessageError: 0
        },
        show:true
      }
    },
    apollo:{
    classrooms: gql`query {
      classrooms{
        value : id
        text : name
      }
    }`,
    // update: data => data.name
  },
    methods: {
        async onSubmit(evt) {
    // Call to the graphql mutation
          evt.preventDefault()
          // const result = 
          console.log(this.$apollo)
           this.$apollo.mutate({
            // Query
            
            mutation: gql`mutation ($firstname : String!,
                                    $lastname : String!, 
                                    $email : String!, 
                                    $password : String!, 
                                    $classroom : ID!, 
                                     ) {
            createUser( data: {
            firstname: $firstname
            lastname: $lastname
            email: $email
            password: $password
            class: {
              connect:{
                id : $classroom
              }
            }}){
            id
            firstname
            lastname
          }
          }`,
            // Parameters
            variables: {
              firstname: this.form.firstname,
              lastname: this.form.lastname,
              email: this.form.email,
              password: this.form.password,
              classroom: this.form.classroom,
            },
          }).then( ( result) => {
            this.showAlertCreate();
            this.popupCreate.newUser=result.data.createUser.lastname+" "+result.data.createUser.firstname
            console.log(result);
          } ).catch( ( error ) => {
             this.showAlertError();
             console.log(error);
          } )
          
        },
      showAlertCreate() {
        this.popupCreate.showMessageCreate = this.popupErreur.dismissSecs
      },
      countDownChangedCreate(showMessageCreate) {
        this.popupCreate.showMessageCreate = showMessageCreate
      },
      
      showAlertError() {
        this.popupErreur.showMessageError = this.popupErreur.dismissSecs
      },
      countDownChangedError(showMessageError) {
        this.popupErreur.showMessageError = showMessageError
      },
      
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.food = null
        this.form.password = "passwords"
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
