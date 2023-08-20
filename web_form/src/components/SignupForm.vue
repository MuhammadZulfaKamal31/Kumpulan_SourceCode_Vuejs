<template >
    <div>
        <!-- prvent supaya gak reload -->
        <form @submit.prevent="handleSubmit" class="" action="">
            <label class="" for="">Email: </label>
            <input class="" type="email" required v-model="email">

            <label>Password: </label>
            <input type="password" required v-model="password">
            <div v-if="passwordErrror">{{ passwordErrror }}</div>

            <label>Role: </label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Designer</option>
            </select>

            <label for="">Skill: </label>
            <input type="text" v-model="tempSkill" @keyup="addSkill">

            <div v-for="skill in skill" :key="skill" class="pill">
                <span @click="deleteSkill(skill)">
                    {{ skill }}
                </span>
            </div>

            <div class="terms">
                <input type="checkbox" required v-model="terms">
                <label>Accept terms and condition</label>
            </div>
            <div class="submit">
                <button> Create an Account</button>
            </div>

            <!-- penampung array -->
            <div>
                <input type="checkbox" value="shaun" v-model="names">
                <label for="">Shaun</label>
            </div>
            <div>
                <input type="checkbox" value="kamal" v-model="names">
                <label for="">Kamal</label>
            </div>
            <div>
                <input type="checkbox" value="mario" v-model="names">
                <label for="">Mario</label>
            </div>
        </form>
        <p>email:{{ email }}</p>
        <p>password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms accepted: {{ terms }}</p>
        <p>Names: {{ names }}</p>
    </div>
</template>
<script>
export default {
    name: "signupForm",
    data() {
        return {
            email: "",
            password: "",
            role: "",
            terms: false,
            names: [],
            tempSkill: "",
            skill: [],
            passwordErrror: ""
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                //mencegah input data yang sama masuk
                if (!this.skill.includes(this.tempSkill)) {
                    this.skill.push(this.tempSkill)

                }
                this.tempSkill = '';
            }
        },
        deleteSkill(skill) {
            this.skill = this.skill.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit() {
            //parameter
            this.passwordErrror = this.password.length > 5 ? "" : "password least be 6  karakter";

            if (!this.passwordError) {
                console.log('email', this.email);
                console.log('password: ', this.password);
                console.log("role", this.role);
                console.log('terms accepted', this.terms);
            }
        }
    }
}
</script>
<style >
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

button {
    background: #4f65f5;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px
}

.submit {
    text-align: center;
}
</style>