<template>
  <Modal>
    <Login @login="$emit('login')" />
  </Modal>
</template>
<script>
import Modal from "@/components/Modal";
import Login from "./Login";
export default {
  name: "LoginModal",
  components: { Modal, Login },
};
</script>
