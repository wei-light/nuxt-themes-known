<script setup lang="ts">
defineProps<{
  name: string
  avatar: string
  sign: string
}>()
</script>

<template>
  <div class="block-info">
    <div class="avatar">
      <img :src="avatar" alt="user-avatar">
    </div>
    <div class="info">
      <p class="name">
        {{ name }}
      </p>
      <p class="sign">
        {{ sign }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.block-info {
  display: flex;
  align-items: center;

  .avatar {
    overflow: hidden;
    flex-shrink: 0;
    height: 64px;
    width: 64px;
    border-radius: 9999px;

    @sm {
      height: 80px;
      width: 80px;
    }

    @md {
      height: 96px;
      width: 96px;
    }

    @lg {
      height: 128px;
      width: 128px;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }

  .info {
    margin-left: 24px;

    @md {
      margin-left: 32px;
    }

    @lg {
      margin-left: 40px;
    }

    .name {
      font-size: 18px;
      line-height: 28px;
      font-weight: 700;

      @sm {
        font-size: 24px;
        line-height: 32px;
      }
    }

    .sign {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 2px;
      font-size: 13px;
      opacity: 0.6;

      @sm {
        margin-top: 8px;
        font-size: 14px;
      }

      @md {
        margin-top: 16px;
      }

      @lg {
        margin-top: 24px;
      }
    }
  }
}
</style>
