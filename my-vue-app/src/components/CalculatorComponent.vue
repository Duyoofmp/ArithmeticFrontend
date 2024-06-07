<template>
  <div class="calculator">
    <h2>Calculator</h2>
    <div>
      <input type="number" v-model.number="number1" placeholder="Number 1" />
      <input type="number" v-model.number="number2" placeholder="Number 2" />
    </div>
    <div>
      <button @click="performOperation('add')">+</button>
      <button @click="performOperation('subtract')">-</button>
      <button @click="performOperation('multiply')">*</button>
      <button @click="performOperation('divide')">/</button>
    </div>
    <div v-if="result !== null">
      <h3>Result: {{ result }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CalculatorComponent',
  data() {
    return {
      number1: 0,
      number2: 0,
      result: null
    };
  },
  methods: {
    async performOperation(operation) {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
        return;
      }

      try {
        const response = await axios.post(`http://your-backend-url/${operation}`, {
          number1: this.number1,
          number2: this.number2
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.result = response.data.result;
      } catch (error) {
        console.error('Operation failed', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
