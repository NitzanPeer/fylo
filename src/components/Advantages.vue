<template>
    <section class="advantages">
        <!-- <ul v-if="advantages?.length" class="clean-list">
            <li v-for="advantage in advantages">
                <AdvantagePreview />
            </li>
        </ul> -->

        <div class="advantage-card">
            <img src="../assets/svgs/icon-access-anywhere.svg" alt="">
            <h2>Access your files, anywhere</h2>
            <p>The ability to use a smartphone, tablet, or computer to access your account
                means your files follow you everywhere.
            </p>
        </div>
        <div class="advantage-card">
            <img src="../assets/svgs/icon-security.svg" alt="">
            <h2>Security you can trust</h2>
            <p>2-factor authentication and user-controlled encryption are just a couple of the
                security features we allow to help secure your files.
            </p>
        </div>
        <div class="advantage-card">
            <img src="../assets/svgs/icon-collaboration.svg" alt="">
            <h2>Real-time collaboration</h2>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration.
                No email attachments required.
            </p>
        </div>
        <div class="advantage-card">
            <img src="../assets/svgs/icon-any-file.svg" alt="">
            <h2>Store any type of file</h2>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered
                allowing for all file types to be securely stored and shared.
            </p>
        </div>

    </section>
</template>

<script>
import AdvantagePreview from './AdvantagePreview.vue'

export default {
    props: {
        advantages: { type: Array }
    },
    components: {
        AdvantagePreview
    }
}
</script>

