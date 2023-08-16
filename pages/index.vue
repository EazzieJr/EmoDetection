<template>
  <section class="">
    <div class="trnsl constraint">
      <div class="trnsl-container between">
        <div class="left">
          <h5>Emotion Detector</h5>
  
          <p>
            Detect emotions in text
          </p>
        </div>
  
        <div class="right">
          <a href="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.24658C9.6255 2.24668 7.32849 3.0917 5.51999 4.63043C3.71149 6.16916 2.50953 8.3012 2.12916 10.6451C1.74879 12.9889 2.21485 15.3917 3.44393 17.4233C4.67301 19.455 6.58491 20.9831 8.83755 21.7341C9.33755 21.8216 9.52505 21.5216 9.52505 21.2591C9.52505 21.0216 9.51254 20.2341 9.51254 19.3966C7.00003 19.8591 6.35003 18.7841 6.15003 18.2216C5.9281 17.6745 5.5763 17.1897 5.12503 16.8091C4.77503 16.6216 4.27503 16.1591 5.11252 16.1466C5.4323 16.1813 5.73901 16.2926 6.00666 16.471C6.2743 16.6494 6.49499 16.8897 6.65003 17.1716C6.7868 17.4173 6.97071 17.6336 7.19122 17.8081C7.41173 17.9826 7.6645 18.1118 7.93506 18.1885C8.20562 18.2651 8.48864 18.2876 8.76791 18.2547C9.04717 18.2218 9.3172 18.134 9.56251 17.9966C9.6058 17.4882 9.83237 17.0129 10.2 16.6591C7.97503 16.4091 5.65003 15.5466 5.65003 11.7216C5.63597 10.7278 6.00271 9.76619 6.67503 9.03411C6.36931 8.17033 6.40508 7.2224 6.77503 6.38411C6.77503 6.38411 7.6125 6.1216 9.52503 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0494 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0762 16.901 14.26 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z" fill="black"/>
            </svg>
  
            <span>View on Github</span>
          </a>
        </div>
      </div>
    </div>

    <div class="converters constraint">
      <form @submit.prevent="detectEmotion" class="">

        <!-- Input field being English -->
        <div class="english">
          <div class="top between">
            <div class="country-info">
              <span>Enter Text</span>
            </div>

            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.71967C5.42678 9.01256 5.42678 9.48744 5.71967 9.78033L11.9697 16.0303C12.2626 16.3232 12.7374 16.3232 13.0303 16.0303L19.2803 9.78033C19.5732 9.48744 19.5732 9.01256 19.2803 8.71967C18.9874 8.42678 18.5126 8.42678 18.2197 8.71967L12.5 14.4393L6.78033 8.71967C6.48744 8.42678 6.01256 8.42678 5.71967 8.71967Z"/>
            </svg>
          </div>

          <div class="bottom">
            <!-- Input textarea -->
            <textarea v-model="input" name="inputtext" id="inputtext" placeholder="Input the text you wish to analyse"></textarea>

            <div class="buttons end">
              <button class="translate-now" :disabled="isTranslateDisabled">
                <svg width="25" height="24" class="stroke-white" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.505 21.9842C18.0164 21.9842 22.4842 17.5164 22.4842 12.005C22.4842 6.49363 18.0164 2.02579 12.505 2.02579C6.99363 2.02579 2.52579 6.49363 2.52579 12.005C2.52579 17.5164 6.99363 21.9842 12.505 21.9842Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.63721 4.02161L14.8002 12.2046L14.8202 7.66402"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.3628 19.9784L10.1998 11.8054L10.1798 16.336"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span>Detect now</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Output field being Danish -->
        <div class="danish">
          <div class="top between">
            <div class="country-info">
              <span>Emotion Output</span>
            </div>

            <svg width="25" height="24" class="arrow" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.71967C5.42678 9.01256 5.42678 9.48744 5.71967 9.78033L11.9697 16.0303C12.2626 16.3232 12.7374 16.3232 13.0303 16.0303L19.2803 9.78033C19.5732 9.48744 19.5732 9.01256 19.2803 8.71967C18.9874 8.42678 18.5126 8.42678 18.2197 8.71967L12.5 14.4393L6.78033 8.71967C6.48744 8.42678 6.01256 8.42678 5.71967 8.71967Z" />
            </svg>
          </div>

          <div class="bottom">
            <!-- Output textarea -->
            <textarea name="outputtext" v-model="output" id="outputtext" disabled placeholder="This is a dummy text that will be replaced by the result of the analyzed text"></textarea>

            <div class="Loader center" v-if="loading">
              <LineSpinFadeLoader color="black" scale="0.35" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Lenis from '@studio-freight/lenis'
import "vue-loaders/dist/vue-loaders.css";
import LineSpinFadeLoader from "vue-loaders/dist/loaders/line-spin-fade-loader";

export default {
  name: 'IndexPage',

  components: {
    LineSpinFadeLoader: LineSpinFadeLoader.component,
  },

  data() {
    return {
      input: "",
      output: "",
      loading: false
    }
  },

  watch: {
    input() {
      console.log(this.input.split(" ").length)
    }
  },

  computed: {
    isTranslateDisabled() {
      if(this.input.split(" ").length > 5) return false;
      else return true;
    },
  },

  methods: {
    initLenis() {
      const lenis = new Lenis({duration: 2})

      lenis.on('scroll', (e) => {
        // console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    },
  
    async detectEmotion() {
      this.loading = true
      const result = await this.$axios.$get(`https://emotion-detect-uu95.onrender.com/predict/${this.input}}`)

      this.loading = false
      this.output = result.emotion
    }
  }, 

  mounted() {
    this.initLenis()
  }
}
</script>

<style lang="postcss" scoped>
.trnsl {
  @apply mt-5;
  .trnsl-container {
    @apply py-3 lg:py-5 px-5 lg:px-10 rounded-full w-full bg-dark ;
    .left {
      @apply flex items-center divide-x-2 divide-light ;

      h5 {
        @apply text-base lg:text-xl xl:text-2xl font-medium text-light  md:pr-5 lg:pr-8 xl:pr-10;
      }

      p {
        @apply md:pl-5 lg:pl-8 xl:pl-10 hidden md:block md:text-sm lg:text-base xl:text-xl text-light ;
      }
    } 

    .right {
      a {
        @apply rounded-full bg-light p-2.5 lg:p-4 flex items-center space-x-2 lg:space-x-2.5 text-dark text-xs lg:text-sm;

        img {
          @appl w-5 lg:w-6;
        }
      }
    }
  }
}

.converters {
  form {
    @apply space-y-8 md:space-y-0 mt-10 lg:mt-12 xl:mt-[60px] md:flex justify-between;

    .english, .danish { 
      @apply bg-light rounded-3xl lg:rounded-[40px] md:w-[48%] min-h-fit;
      box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.12);

      .top {
        @apply py-5 lg:py-[30px] px-7 lg:px-10 border-b-[0.5px] border-dark ;

        .country-info {
          @apply flex items-center space-x-4 lg:space-x-5;

          img {
            @apply w-8 h-8 lg:w-10 lg:h-10;
          }

          span {
            @apply text-dark  lg:text-xl xl:text-2xl font-medium;
          }
        }

        > svg {
          @apply w-5 lg:w-6 fill-[#24292E];
        }
      }

      .bottom {
        @apply relative;
        
        textarea {
          @apply min-w-full max-w-full px-6 lg:px-8 py-7 lg:py-10 resize-none min-h-[220px] max-h-[220px] lg:min-h-[320px] xl:max-h-[360px] xl:min-h-[360px] bg-transparent text-sm lg:text-base text-black focus:outline-none;
        }

        .buttons {
          @apply px-7 lg:px-10 pb-7 lg:pb-10;

          .info svg {
            @apply w-11 lg:w-14
          }

          .translate-now {
            @apply p-2.5 lg:p-3 rounded-full bg-dark  flex items-center space-x-2 lg:space-x-2.5 text-xs lg:text-sm text-light ;
            @apply  disabled:bg-[#999999] disabled:text-explainer;

            &:disabled {
              svg {
                @apply stroke-[#666666];
              }
            }
          }

          .copy-text {
            @apply p-2.5 lg:p-3 rounded-full bg-dark  flex items-center space-x-2 lg:space-x-2.5 text-xs lg:text-sm text-light ;
            @apply  disabled:bg-[#999999] disabled:text-explainer;

            svg {
              @apply stroke-white;

              path {
                @apply first:fill-white;
              }
            }

            &:disabled {
              svg {
                @apply stroke-[#666666];

                path {
                  @apply first:fill-[#666666] first:dark:fill-[#666666]
                }
              }
            }
          }
        }

        .Loader {
          @apply absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 z-[100] backdrop-blur-sm;
        }
      }
    }
  }
}
</style>