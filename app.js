'use strict';

/* ============================================================
   КОНФІГУРАЦІЯ ГРИ
   Сюди додавати активи та локації при розширенні
   ============================================================ */
const GAME_CONFIG = {
  // Базова роздільна здатність (16:9)
  BASE_WIDTH: 1920,
  BASE_HEIGHT: 1080,

  // Активи для прелоадингу
  assets: {
    images: [
      { id: 'bg_park',     src: 'bg_park.png'     },
      { id: 'bg_forest',   src: 'bg_forest.png'   },
      { id: 'scene5_bg',   src: 'scene_5_01_bg.png' },
      { id: 'cutscene_magic_bg', src: 'cutscene_magic_bg.png' },
      { id: 'key_part_1',  src: 'key_part_1.png'  },
      { id: 'key_main',   src: 'key_main.png'    },
      { id: 'bg_cave_dark', src: 'cave_bg_dark.png' },
      { id: 'bg_cave_lit', src: 'cave_bg_lit.png' },
      { id: 'cave_crystal_circle', src: 'crystal_circle.png' },
      { id: 'cave_crystal_triangle', src: 'crystal_triangle.png' },
      { id: 'cave_crystal_square', src: 'crystal_square.png' },
      { id: 'cave_crystal_polygon', src: 'crystal_polygon.png' },
      { id: 'key_part_2',  src: 'key_part_2.png'  },
      { id: 'river_girl_hands_down', src: 'girl_hands_down.png' },
      { id: 'river_boy_hands_down', src: 'boy_hands_down.png' },
      { id: 'river_girl_vest', src: 'girl_vest.png' },
      { id: 'river_boy_vest', src: 'boy_vest.png' },
      { id: 'river_girl_helmet_vest', src: 'girl_helmet_vest.png' },
      { id: 'river_boy_helmet_vest', src: 'boy_helmet_vest.png' },
      { id: 'squirrel',    src: 'squirrel.png'    },
      { id: 'forest_boy',  src: 'boy.png'         },
      { id: 'forest_girl', src: 'girl.png'        },
      { id: 'cave_boy',    src: 'boy-body_L.png' },
      { id: 'cave_girl',   src: 'girl-body.png' },
      { id: 'forest_dog',  src: 'dog.png'         },
      { id: 'dog_body',    src: 'dog-body.png'    },
      { id: 'dog_tongue',  src: 'dog-tongue.png'  },
      { id: 'girl_body',   src: 'girl-body.png'   },
      { id: 'girl_arm',    src: 'girl-arm.png'    },
      { id: 'girl_smile',  src: 'girl-smile.png'  },
      { id: 'boy_body',    src: 'boy-body.png'    },
      { id: 'boy_arm',     src: 'boy-arm.png'     },
      { id: 'boy_smile',   src: 'boy-smile.png'   },
      { id: 'ball',        src: 'ball.png'        },
    ],
    audio: [
      // ── BGM ───────────────────────────────────────────────────────────────
      { id: 'bgm_main', src: 'audio/bgm/bgm_01.mp3', type: 'bgm' },
      // ── SFX ───────────────────────────────────────────────────────────────
      { id: 'sfx_ball',      src: 'audio/sfx_ball.mp3',      type: 'sfx' },
      { id: 'sfx_dog_happy', src: 'audio/sfx_dog_happy.mp3', type: 'sfx' },
      { id: 'sfx_key',       src: 'audio/sfx_key.mp3',       type: 'sfx' },
      { id: 'sfx_tree',      src: 'audio/sfx_tree.mp3',      type: 'sfx' },
      { id: 'sfx_nuts',      src: 'audio/sfx_nuts.mp3',      type: 'sfx' },
      { id: 'sfx_torch',     src: 'audio/sfx_torch.mp3',     type: 'sfx' },
      { id: 'sfx_crystal',   src: 'audio/sfx_crystal.mp3',   type: 'sfx' },
      { id: 'sfx_puzzle',    src: 'audio/sfx_puzzle.mp3',    type: 'sfx' },
      { id: 'sfx_equip',     src: 'audio/sfx_equip.mp3',     type: 'sfx' },
      { id: 'sfx_raft',      src: 'audio/sfx_raft.mp3',      type: 'sfx' },
      { id: 'sfx_button',    src: 'audio/sfx_button.mp3',    type: 'sfx' },
      { id: 'sfx_traffic',   src: 'audio/sfx_traffic.mp3',   type: 'sfx' },
      { id: 'sfx_synthesis', src: 'audio/sfx_synthesis.mp3', type: 'sfx' },
      { id: 'sfx_flash',     src: 'audio/sfx_flash.mp3',     type: 'sfx' },
      { id: 'sfx_win',       src: 'audio/sfx_win.mp3',       type: 'sfx' },
      { id: 'sfx_click',     src: 'audio/sfx_click.mp3',     type: 'sfx' },
      { id: 'sfx_cheer',     src: 'audio/sfx_cheer.mp3',     type: 'sfx' },
      // ── Voice Over ────────────────────────────────────────────────────────
      { id: 'vo_intro',       src: 'audio/vo_intro.mp3',       type: 'vo' },
      { id: 'vo_start',       src: 'audio/vo_start.mp3',       type: 'vo' },
      { id: 'vo_dog_thanks',  src: 'audio/vo_dog_thanks.mp3',  type: 'vo' },
      { id: 'vo_key1',        src: 'audio/vo_key1.mp3',        type: 'vo' },
      { id: 'vo_forest',      src: 'audio/vo_forest.mp3',      type: 'vo' },
      { id: 'vo_squirrel',    src: 'audio/vo_squirrel.mp3',    type: 'vo' },
      { id: 'vo_key2',        src: 'audio/vo_key2.mp3',        type: 'vo' },
      { id: 'vo_cave_dark',   src: 'audio/vo_cave_dark.mp3',   type: 'vo' },
      { id: 'vo_cave_lit',    src: 'audio/vo_cave_lit.mp3',    type: 'vo' },
      { id: 'vo_altar',       src: 'audio/vo_altar.mp3',       type: 'vo' },
      { id: 'vo_key3',        src: 'audio/vo_key3.mp3',        type: 'vo' },
      { id: 'vo_river',       src: 'audio/vo_river.mp3',       type: 'vo' },
      { id: 'vo_raft',        src: 'audio/vo_raft.mp3',        type: 'vo' },
      { id: 'vo_river_done',  src: 'audio/vo_river_done.mp3',  type: 'vo' },
      { id: 'vo_key4',        src: 'audio/vo_key4.mp3',        type: 'vo' },
      { id: 'vo_red_light',   src: 'audio/vo_red_light.mp3',   type: 'vo' },
      { id: 'vo_green_light', src: 'audio/vo_green_light.mp3', type: 'vo' },
      { id: 'vo_cross_done',  src: 'audio/vo_cross_done.mp3',  type: 'vo' },
      { id: 'vo_key5',        src: 'audio/vo_key5.mp3',        type: 'vo' },
      { id: 'vo_finale',      src: 'audio/vo_finale.mp3',      type: 'vo' },
    ],
  },

  // Локації по порядку
  locations: [
    {
      id: 'LOCATION_1',
      bgColor: '#2c3e6b',      // заповнювач кольором до появи реального фону
      bgImage: 'bg_park',
      groundY: 0.93,
      bench: { left: 0.44, right: 0.68, top: 0.74, tolerance: 0.035 },
      hintText: 'Знайди м\'ячик у кущах і допоможи песику.',
      // objects: [{ id: 'character', x: 0.5, y: 0.6, scale: 1 }],
    },
    {
      id: 'LOCATION_2',
      bgColor: '#2d5a3d',
      bgImage: 'bg_forest',
      groundY: 0.95,
    },
        {
      id: 'LOCATION_3',
      bgColor: '#6b3a2c',
      bgImage: 'bg_cave_dark',
      hintText: 'Знайди чотири кристали та встанови кожен у гніздо відповідної форми.',
    },
    {
      id: 'LOCATION_4',
      bgColor: '#4a2c6b',
    },
    {
      id: 'LOCATION_5',
      bgColor: '#2c5a5a',
      bgImage: 'scene5_bg',
      hintText: 'Натисни червону кнопку.',
      groundY: 0.82,   // рівень основи світлофору
    },
  ],
};

const CAVE_PUZZLE_SHAPES = Object.freeze(['circle', 'triangle', 'diamond', 'hexagon']);


/* ============================================================
   КЛАС: AssetLoader
   Прелоадер зображень та аудіо з прогрес-баром
   ============================================================ */
class AssetLoader {
  constructor(config) {
    this.images = {};   // { id: HTMLImageElement }
    this.audio  = {};   // { id: HTMLAudioElement }
    this.config = config;
    this._onProgress = null;
  }

  /**
   * @param {function(progress: number)} callback — викликається 0..1
   */
  onProgress(callback) {
    this._onProgress = callback;
    return this;
  }

  /**
   * Завантажує всі активи. Повертає Promise.
   */
  load() {
    const imageList = this.config.assets.images;
    const audioList = this.config.assets.audio;
    const total = imageList.length + audioList.length;

    // Якщо активів немає — одразу резолвимо
    if (total === 0) {
      this._onProgress && this._onProgress(1);
      return Promise.resolve();
    }

    let loaded = 0;
    const tick = () => {
      loaded++;
      this._onProgress && this._onProgress(loaded / total);
    };

    const imagePromises = imageList.map(item => new Promise((resolve) => {
      const img = new Image();
      img.onload  = () => { this.images[item.id] = img; tick(); resolve(); };
      img.onerror = () => { console.warn(`[AssetLoader] Не вдалося завантажити: ${item.src}`); tick(); resolve(); };
      img.src = item.src;
    }));

    const audioPromises = audioList.map(item => new Promise((resolve) => {
      const audio = new Audio();
      audio.oncanplaythrough = () => { this.audio[item.id] = audio; tick(); resolve(); };
      audio.onerror = () => { console.warn(`[AssetLoader] Не вдалося завантажити: ${item.src}`); tick(); resolve(); };
      audio.src = item.src;
      audio.load();
    }));

    return Promise.all([...imagePromises, ...audioPromises]);
  }

  /** Повертає зображення за id або null */
  getImage(id) {
    return this.images[id] || null;
  }

  /** Повертає аудіо-елемент за id або null */
  getAudio(id) {
    return this.audio[id] || null;
  }
}


/* ============================================================
   КЛАС: SoundManager
   BGM, SFX, VO з ducking (приглушення BGM під час VO)
   ============================================================ */
class SoundManager {
  constructor(assetLoader) {
    this.assets  = assetLoader;
    this.bgm     = null;   // поточна фонова музика
    this.bgmId   = null;
    this.bgmVol  = 0.6;    // нормальна гучність BGM
    this.sfxVol  = 1.0;
    this.voVol   = 1.0;
    this.duckVol = 0.15;   // гучність BGM під час VO
    this._muted  = false;
    this._audioContext = null;
    this._voQueue = [];        // черга голосових реплік
    this._voPlaying = false;
    this._currentVOScene = null;  // поточна сцена; VO інших сцен ігноруються
  }

  /** Вмикає/вимикає весь звук */
  setMuted(val) {
    this._muted = val;
    if (this.bgm) this.bgm.muted = val;
  }

  get muted() { return this._muted; }

  /* --- BGM --- */

  /** Запускає фонову музику (зациклену) */
  playBGM(id) {
    if (this.bgmId === id) return;
    this.stopBGM();
    const audio = this.assets.getAudio(id);
    if (!audio) return;
    this.bgm = audio;
    this.bgmId = id;
    this.bgm.loop = true;
    this.bgm.volume = this._voPlaying ? this.duckVol : this.bgmVol;
    this.bgm.muted = this._muted;
    this.bgm.currentTime = 0;
    this.bgm.play().catch(() => {
      // Autoplay заблоковано — відтворимо при першому кліку
      const unlock = () => {
        this.bgm && this.bgm.play().catch(() => {});
        document.removeEventListener('click', unlock);
      };
      document.addEventListener('click', unlock);
    });
  }

  stopBGM() {
    if (!this.bgm) return;
    this.bgm.pause();
    this.bgm.currentTime = 0;
    this.bgm = null;
    this.bgmId = null;
  }

  /* --- SFX --- */

  /** Відтворює звуковий ефект (одноразово) */
  playSFX(id) {
    if (this._muted) return;
    const audio = this.assets.getAudio(id);
    if (!audio) return;
    // Клонуємо, щоб можна було перекривати
    const clone = audio.cloneNode();
    clone.volume = this.sfxVol;
    clone.play().catch(e => console.warn('[SFX] play failed:', id, e));
  }

  playSound(id) {
    if (id !== 'pop' || this._muted) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    this._audioContext = this._audioContext || new AudioContextClass();
    const context = this._audioContext;
    if (context.state === 'suspended') context.resume();

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(620, now);
    oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.12);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.13);
  }

  /* --- VO (Voice Over) з ducking --- */

  /**
   * Додає голосову репліку в чергу
   * @param {string} id
   * @param {function} [onEnd] — callback після завершення
   */
  /**
   * Ставить VO у чергу.
   * @param {string} id  — ідентифікатор аудіо
   * @param {Function} [onEnd]  — колбек після відтворення
   * @param {string}   [scene]  — якщо вказана, VO скасовується коли гравець вже не в цій сцені
   */
  queueVO(id, onEnd, scene) {
    this._voQueue.push({ id, onEnd, scene });
    this.onVOStarted && this.onVOStarted();
    if (!this._voPlaying) this._playNextVO();
  }

  /** Очищує чергу VO і зупиняє поточний трек */
  clearVO() {
    this._voQueue = [];
    this._voPlaying = false;
    this._unduck();
  }

  _playNextVO() {
    // Пропускаємо елементи черги, що вже не актуальні для поточної сцени
    while (this._voQueue.length > 0) {
      const next = this._voQueue[0];
      if (next.scene && this._currentVOScene !== next.scene) {
        this._voQueue.shift();   // сцена змінилась — відкидаємо
        continue;
      }
      break;
    }

    if (this._voQueue.length === 0) {
      this._voPlaying = false;
      this._unduck();
      this.onVOQueueEmpty && this.onVOQueueEmpty();
      return;
    }
    this._voPlaying = true;
    this._duck();
    const { id, onEnd } = this._voQueue.shift();
    const audio = this.assets.getAudio(id);
    if (!audio) {
      onEnd && onEnd();
      this._playNextVO();
      return;
    }
    audio.volume = this.voVol;
    audio.muted = this._muted;
    audio.currentTime = 0;
    audio.onended = () => {
      onEnd && onEnd();
      this._playNextVO();
    };
    audio.play().catch(e => { console.warn('[VO] play failed:', id, e); this._playNextVO(); });
  }

  _duck() {
    if (this.bgm) {
      this.bgm.volume = this.duckVol;
    }
  }

  _unduck() {
    if (this.bgm) {
      this.bgm.volume = this.bgmVol;
    }
  }
}


/* ============================================================
   КЛАС: StateMachine
   Стани: BOOT → LOADING → START_SCREEN → LOCATION_1..5
          → KEY_ASSEMBLY → FINALE
   ============================================================ */
const STATES = {
  BOOT:          'BOOT',
  LOADING:       'LOADING',
  START_SCREEN:  'START_SCREEN',
  SCENE_SELECT:  'SCENE_SELECT',
  LOCATION_1:    'LOCATION_1',
  LOCATION_2:    'LOCATION_2',
  LOCATION_3:    'LOCATION_3',
  LOCATION_4:    'LOCATION_4',
  LOCATION_5:    'LOCATION_5',
  KEY_ASSEMBLY:  'KEY_ASSEMBLY',
  FINALE:        'FINALE',
};

class StateMachine {
  constructor() {
    this.current   = STATES.BOOT;
    this.previous  = null;
    this._handlers = {}; // { stateName: { onEnter, onExit } }
  }

  /**
   * Реєструє обробники для стану
   * @param {string} state
   * @param {{ onEnter?: function, onExit?: function }} handlers
   */
  register(state, handlers) {
    this._handlers[state] = handlers;
    return this;
  }

  /**
   * Переходить до нового стану
   * @param {string} nextState
   */
  transition(nextState) {
    if (nextState === this.current) return;
    console.log(`[StateMachine] ${this.current} → ${nextState}`);

    // Вихід з поточного
    const cur = this._handlers[this.current];
    cur && cur.onExit && cur.onExit();

    this.previous = this.current;
    this.current  = nextState;

    // Вхід у новий
    const next = this._handlers[nextState];
    next && next.onEnter && next.onEnter();
  }

  is(state) { return this.current === state; }
}


/* ============================================================
   КЛАС: HintManager
   Показ підказок (текст у нижній частині екрану)
   ============================================================ */
class HintManager {
  constructor(el) {
    this.el = el;
    this._timeout = null;
  }

  /** Підказки вимкнено — озвучення замінює текст */
  show(text, hideAfterMs = 0) { /* no-op: VO озвучує підказки */ }
  hide() { this.el.style.opacity = '0'; }
}


/* ============================================================
   ГОЛОВНИЙ КЛАС: Game
   Ініціалізація, автоскейлінг, координація модулів
   ============================================================ */
class Game {
  constructor() {
    // DOM елементи
    this.el = {
      loader:         document.getElementById('loader'),
      loaderBar:      document.getElementById('loader-bar'),
      loaderText:     document.getElementById('loader-text'),
      gameContainer:  document.getElementById('game-container'),
      bgLayer:        document.getElementById('bg-layer'),
      objectsLayer:   document.getElementById('objects-layer'),
      startScreen:    document.getElementById('start-screen'),
      locationScreen: document.getElementById('location-screen'),
      finaleScreen:   document.getElementById('finale-screen'),
      sceneSelectScreen: document.getElementById('scene-select-screen'),
      sceneSelectButtons: [...document.querySelectorAll('[data-scene-state]')],
      locationHint:   document.getElementById('location-hint'),
      tapZone:        document.getElementById('tap-zone'),
      sceneDog:       document.getElementById('dog'),
      dogDropZone:    document.getElementById('dog-drop-zone'),
      sceneGirl:      document.getElementById('girl'),
      sceneBoy:       document.getElementById('boy'),
      sceneBall:      document.getElementById('scene-ball'),
      sceneKey:       document.getElementById('scene-key'),
      caveTorch:      document.getElementById('cave-torch'),
      caveTorchFire:  document.getElementById('cave-torch-fire'),
      caveCrystals:   [...document.querySelectorAll('.cave-crystal')],
      caveSockets:    [...document.querySelectorAll('.cave-socket')],
      riverEquipment: [...document.querySelectorAll('.river-equipment-item')],
      riverEquipmentPanel: document.querySelector('.river-equipment'),
      riverEquipmentProgress: document.querySelector('.river-equipment-progress'),
      riverRaft:      document.getElementById('river-raft'),
      riverRaftStorage: document.querySelector('.river-raft-storage'),
      riverRiders:    [...document.querySelectorAll('.river-rider')],
      riverLeftCharacters: [...document.querySelectorAll('.river-characters--left .river-character-target')],
      riverRightCharacters: [...document.querySelectorAll('.river-characters--right .river-character-target')],
      riverKey:       document.getElementById('key-part-4'),
      treeHollow:     document.getElementById('tree-hollow'),
      treeCrown:      document.getElementById('tree-crown'),
      forestCrownVisual: document.getElementById('forest-crown-visual'),
      forestSquirrel: document.getElementById('squirrel'),
      forestNuts:     [...document.querySelectorAll('.forest-nut')],
      forestKey:      document.getElementById('forest-key'),
      sceneHud:       document.getElementById('scene-hud'),
      kidsDialog:     document.getElementById('kids-dialog'),
      closeKidsDialog: document.getElementById('btn-close-kids-dialog'),
      dogDialog:      document.getElementById('dog-dialog'),
      closeDialog:    document.getElementById('btn-close-dialog'),
      keyCount:       document.getElementById('key-count'),
      keySlot:        document.getElementById('key-slot-1'),
      keySlotImage:   document.getElementById('key-slot-image'),
      keySlot2:       document.getElementById('key-slot-2'),
      keySlotImage2:  document.getElementById('key-slot-image-2'),
      keySlot3:       document.getElementById('key-slot-3'),
      keySlotImage3:  document.getElementById('key-slot-image-3'),
      keySlot4:       document.getElementById('key-slot-4'),
      keySlotImage4:  document.getElementById('key-slot-image-4'),
      keySlot5:       document.getElementById('key-slot-5'),
      keySlotImage5:  document.getElementById('key-slot-image-5'),
      caveKey:        document.getElementById('cave-key'),
      scene5Button:   document.getElementById('scene5-call-button'),
      scene5Scene:    document.getElementById('scene-crossing'),
      scene5Characters: [...document.querySelectorAll('.scene5-character')],
      scene5Key:      document.getElementById('scene5-key'),
      scene5Destination: document.getElementById('scene5-destination'),
      btnNextLocation: document.getElementById('btn-next-location'),
      btnBackPark:    document.getElementById('btn-back-park'),
      btnPlay:        document.getElementById('btn-play'),
      btnRestart:     document.getElementById('btn-restart'),
      btnSceneSelect: document.getElementById('btn-scene-select'),
      btnBackToFinale: document.getElementById('btn-back-to-finale'),
    };

    this.config       = GAME_CONFIG;
    this.assetLoader  = new AssetLoader(this.config);
    this.sound        = new SoundManager(this.assetLoader);
    this.sm           = new StateMachine();
    this.hints        = new HintManager(this.el.locationHint);

    this.currentLocationIndex = 0;
    this.dogHappy = false;
    this.keyCollected = false;
    this.lastKid = null;
    this.dragState = null;
    this.suppressedDragClicks = new WeakSet();
    this.nutsReleased = false;
    this.forestNutsDelivered = 0;
    this.forestKeyCollected = false;
    this.caveLit = false;
    this.caveDarkVODone = false;
    this.cavePlacedCrystals = new Set();
    this.caveDragState = null;
    this.caveSuppressClick = null;
    this.selectedCaveCrystal = null;
    this.caveKeyCollected = false;
    this.caveGeneration = 0;
    this.caveKeyRevealTimer = null;
    this.riverEquipmentCollected = new Set();
    this.riverCrossing = false;
    this.riverCrossed = false;
    this.riverKeyCollected = false;
    this.riverPanelRevealed = false;  // панель інвентарю з'являється після VO
    this.riverCrossingTimer = null;
    this.scene5Generation = 0;
    this.scene5Timers = new Map();
    this.scene5Pressing = false;
    this.scene5CrossingAllowed = false;
    this.scene5KeyCollected = false;
    this.scene5Finalizing = false;
    this.scene5SynthesisOverlay = null;
    this.scene5CrossedCharacters = new Set();
    this.boyDragState = null;
    this.girlDragState = null;
  }

  /* ---- ЗАПУСК ---- */
  async init() {
    this._injectGameCSS();
    this._setupAutoscale();
    this._registerStates();
    this._bindEvents();

    // Блокуємо кнопку "далі" поки звучить VO
    this.sound.onVOStarted = () => {
      this.el.btnNextLocation.classList.add('vo-locked');
    };
    this.sound.onVOQueueEmpty = () => {
      this.el.btnNextLocation.classList.remove('vo-locked');
    };

    this.sm.transition(STATES.LOADING);
  }

  /* ---- CSS-ФІКСИ: артефакт-тінь та ефекти ---- */
  _injectGameCSS() {
    const style = document.createElement('style');
    style.textContent = `
      /* Кнопка "далі" заблокована поки звучить VO */
      #btn-next-location.vo-locked {
        opacity: 0.4;
        pointer-events: none;
        cursor: default;
      }

      /* Прибрати темний овал-артефакт під персонажами */
      #boy .shadow, #girl .shadow,
      #boy .char-shadow, #girl .char-shadow,
      #boy .character-shadow, #girl .character-shadow,
      #boy [class*="shadow"], #girl [class*="shadow"],
      #boy::before, #girl::before {
        display: none !important;
      }

      /* Сяйво ієрогліфів/символів на вівтарі після розкладання всіх кристалів */
      .is-cave-complete .cave-socket.is-filled {
        animation: socket-glow 1.4s ease-in-out infinite alternate;
      }
      .is-cave-complete .cave-socket.is-filled:nth-child(2) { animation-delay: 0.2s; }
      .is-cave-complete .cave-socket.is-filled:nth-child(3) { animation-delay: 0.4s; }
      .is-cave-complete .cave-socket.is-filled:nth-child(4) { animation-delay: 0.6s; }

      @keyframes socket-glow {
        from { filter: drop-shadow(0 0 6px #ffe066) brightness(1); }
        to   { filter: drop-shadow(0 0 18px #ffaa00) brightness(1.35); }
      }
    `;
    document.head.appendChild(style);
  }

  /* ---- АВТОСКЕЙЛІНГ 16:9 ---- */
  _setupAutoscale() {
    const resize = () => {
      const ww = window.innerWidth;
      const wh = window.innerHeight;
      const scale = Math.min(
        ww / this.config.BASE_WIDTH,
        wh / this.config.BASE_HEIGHT,
        1,
      );
      const w = this.config.BASE_WIDTH * scale;
      const h = this.config.BASE_HEIGHT * scale;

      const c = this.el.gameContainer;
      c.style.width  = `${w}px`;
      c.style.height = `${h}px`;

      // Масштаб для fontSize та інших елементів, якщо знадобиться
      c.style.setProperty('--scale', (w / this.config.BASE_WIDTH).toFixed(4));
    };

    window.addEventListener('resize', resize);
    resize();
  }

  /* ---- РЕЄСТРАЦІЯ СТАНІВ ---- */
  _registerStates() {
    const sm = this.sm;

    /* LOADING */
    sm.register(STATES.LOADING, {
      onEnter: async () => {
        // Показати лоадер
        this.el.loader.classList.remove('fade-out');

        await this.assetLoader
          .onProgress(p => {
            this.el.loaderBar.style.width = `${Math.round(p * 100)}%`;
            this.el.loaderText.textContent = p < 1
              ? `Завантаження... ${Math.round(p * 100)}%`
              : 'Готово!';
          })
          .load();

        // Мінімальна затримка для плавності (уникаємо миттєвого зникнення лоадера)
        await this._wait(400);

        this.el.loader.classList.add('fade-out');
        await this._wait(500);

        this._resetPark();
        this._resetForest();
        this._resetCave();
        this._resetRiver();
        this._resetScene5();
        this.currentLocationIndex = 0;
        sm.transition(STATES.START_SCREEN);
      },
    });

    /* START_SCREEN */
    sm.register(STATES.START_SCREEN, {
      onEnter: () => {
        this._showScreen('start');
        this.sound.playBGM('bgm_main');
        // vo_intro грає після першого кліку (обхід autoplay-блокування)
      },
      onExit: () => {
        this._hideScreen('start');
      },
    });

    sm.register(STATES.SCENE_SELECT, {
      onEnter: () => this._showScreen('scene-select'),
      onExit: () => this._hideScreen('scene-select'),
    });

    /* LOCATION_1 .. LOCATION_5 */
    this.config.locations.forEach((loc, i) => {
      sm.register(loc.id, {
        onEnter: () => {
          this.currentLocationIndex = i;
          // Позначаємо поточну сцену — VO попередньої сцени будуть проігноровані
          this.sound._currentVOScene = loc.id;
          this._showScreen('location');
          this._applyLocation(loc);
        },
        onExit: () => {
          // Очищаємо VO-чергу при зміні сцени, щоб не чути репліки попередньої локації
          this.sound.clearVO();
          if (loc.id === STATES.LOCATION_4) this._cancelRiverCrossing();
          if (loc.id === STATES.LOCATION_3) this._suspendCaveVisuals();
          if (loc.id === STATES.LOCATION_5  && !this.scene5Finalizing) this._resetScene5();
          this._hideScreen('location');
        },
      });
    });

    sm.register(STATES.KEY_ASSEMBLY, {
      onEnter: () => {
        this.sound.queueVO('vo_finale');
        this._runKeySynthesis();
      },
    });

    /* FINALE */
    sm.register(STATES.FINALE, {
      onEnter: () => {
        // Казковий фон для фінального екрану
        const magicBg = this.assetLoader.getImage('cutscene_magic_bg');
        if (magicBg) {
          this.el.bgLayer.style.backgroundImage = `url("${magicBg.src}")`;
          this.el.bgLayer.style.backgroundSize = 'cover';
          this.el.bgLayer.style.backgroundPosition = 'center';
        }
        this._showScreen('finale');
        this.sound.playSFX('sfx_win');
      },
      onExit: () => {
        this._hideScreen('finale');
        // Відновити фон при перезапуску
        this.el.bgLayer.style.backgroundImage = 'none';
      },
    });
  }

  /* ---- ОБРОБНИКИ ПОДІЙ ---- */
  _bindEvents() {
    // Кнопка "Грати"
    this.el.btnPlay.addEventListener('click', () => {
      this.sound.playSFX('sfx_click');
      this.sound.queueVO('vo_intro');   // тепер після кліку — autoplay дозволено
      this.sound.queueVO('vo_start', null, 'LOCATION_1');
      this._resetPark();
      this._resetForest();
      this._resetCave();
      this._resetRiver();
      this.sm.transition(STATES.LOCATION_1);
    });

    // Кнопка "Грати знову"
    this.el.btnRestart.addEventListener('click', () => {
      this.currentLocationIndex = 0;
      this.sm.transition(STATES.START_SCREEN);
    });
    this.el.btnSceneSelect.addEventListener('click', () => this.sm.transition(STATES.SCENE_SELECT));
    this.el.btnBackToFinale.addEventListener('click', () => this.sm.transition(STATES.FINALE));
    this.el.sceneSelectButtons.forEach((button) => {
      button.addEventListener('click', () => this.sm.transition(button.dataset.sceneState));
    });

    this.el.btnBackPark.addEventListener('click', () => this.sm.transition(STATES.LOCATION_1));
    // Тап-зона: перехід до наступної локації
    this.el.tapZone.addEventListener('click', () => {
      this._nextLocation();
    });

    this.el.sceneDog.addEventListener('click', (event) => {
      if (this.el.locationScreen.dataset.location === STATES.LOCATION_1
        && !this._shouldIgnoreDragClick(this.el.sceneDog, event)) {
        this._interactWithDog();
      }
    });
    this.el.sceneGirl.addEventListener('pointerdown', (event) => this._startCharacterDrag(this.el.sceneGirl, event));
    this.el.sceneGirl.addEventListener('pointermove', (event) => this._moveCharacter(this.el.sceneGirl, event));
    this.el.sceneGirl.addEventListener('pointerup', (event) => this._endCharacterDrag(this.el.sceneGirl, event));
    this.el.sceneGirl.addEventListener('pointercancel', (event) => this._endCharacterDrag(this.el.sceneGirl, event));
    this.el.sceneGirl.addEventListener('click', (event) => {
      if (this.el.locationScreen.dataset.location === STATES.LOCATION_1
        && !this._shouldIgnoreDragClick(this.el.sceneGirl, event)) {
        this._showKidsDialog(this.el.sceneGirl);
      }
    });
    this.el.sceneBoy.addEventListener('pointerdown', (event) => this._startCharacterDrag(this.el.sceneBoy, event));
    this.el.sceneBoy.addEventListener('pointermove', (event) => this._moveCharacter(this.el.sceneBoy, event));
    this.el.sceneBoy.addEventListener('pointerup', (event) => this._endCharacterDrag(this.el.sceneBoy, event));
    this.el.sceneBoy.addEventListener('pointercancel', (event) => this._endCharacterDrag(this.el.sceneBoy, event));
    this.el.sceneBoy.addEventListener('click', (event) => {
      if (this.el.locationScreen.dataset.location === STATES.LOCATION_1
        && !this._shouldIgnoreDragClick(this.el.sceneBoy, event)) {
        this._showKidsDialog(this.el.sceneBoy);
      }
    });
    this._enableCharacterDrag(
      this.el.sceneBall,
      this.el.objectsLayer,
      [this.el.dogDropZone],
      () => this._deliverBallToDog(),
      false,
      () => this.el.locationScreen.dataset.location === STATES.LOCATION_1
        && !this.dogHappy,
      null,
      ({ drag, moved, cancelled }) => this._returnBallToBushes(drag, moved, cancelled),
    );
    this.el.sceneKey.addEventListener('click', () => this._collectKey());
    this.el.caveKey.addEventListener('click', () => this._collectCaveKey());
    
    this.el.caveCrystals.forEach((crystal) => {
      crystal.addEventListener('pointerdown', (event) => this._startCaveCrystalDrag(crystal, event));
      crystal.addEventListener('pointermove', (event) => this._moveCaveCrystal(crystal, event));
      crystal.addEventListener('pointerup', (event) => this._finishCaveCrystalDrag(crystal, event));
      crystal.addEventListener('pointercancel', (event) => this._finishCaveCrystalDrag(crystal, event));
      crystal.addEventListener('click', (event) => {
        if (this.caveSuppressClick === crystal) {
          this.caveSuppressClick = null;
          event.preventDefault();
          return;
        }
        if (this.el.locationScreen.dataset.location === STATES.LOCATION_3) {
          this.selectedCaveCrystal = crystal.dataset.shape;
          this.hints.show('Вибрано кристал. Натисни відповідне гніздо або перетягни його.');
        }
      });
    });
    this.el.caveSockets.forEach((socket) => {
      socket.addEventListener('click', () => {
        const acceptShape = socket.dataset.acceptShape || socket.dataset.shape;
        if (this.selectedCaveCrystal === acceptShape) {
          const crystal = this.el.caveCrystals.find(
            (item) => item.dataset.shape === this.selectedCaveCrystal,
          );
          if (crystal) this._placeCaveCrystal(crystal, socket);
        } else if (this.selectedCaveCrystal) {
          this.hints.show('Цей кристал не підходить до гнізда.');
        }
      });
    });
    this.el.closeKidsDialog.addEventListener('click', () => {
      this.el.kidsDialog.hidden = true;
      this.el.sceneHud.hidden = false;
      (this.lastKid || this.el.sceneGirl).focus();
    });
    this.el.closeDialog.addEventListener('click', () => {
      this.el.dogDialog.hidden = true;
      this.el.sceneDog.focus();
    });
    this.el.btnNextLocation.addEventListener('click', () => this._nextLocation());
    this.el.caveTorch.addEventListener('click', () => this._lightCave());
    this.el.caveTorch.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this._lightCave();
      }
    });
    this.el.scene5Button.addEventListener('click', () => this._pressScene5Button());
    this.el.scene5Characters.forEach((character) => {
      this._enableCharacterDrag(
        character,
        this.el.scene5Scene,
        [this.el.scene5Destination],
        null,
        false,
        () => this.el.locationScreen.dataset.location === STATES.LOCATION_5
          && !this.scene5Finalizing
          && character.dataset.crossed !== 'true',
        ({ drag, deltaX, deltaY, stageRect }) => {
          if (!this.scene5CrossingAllowed) {
            return {
              left: drag.left,
              top: Math.max(0, Math.min(drag.top, drag.top + deltaY)),
            };
          }
          return {
            left: Math.max(0, Math.min(stageRect.width - drag.width, drag.left + deltaX)),
            top: Math.max(0, Math.min(stageRect.height - drag.height, drag.top + deltaY)),
          };
        },
        ({ drag, moved, cancelled }) => this._finishScene5CharacterDrag(
          character, drag, moved, cancelled,
        ),
      );
      character.addEventListener('click', (event) => {
        if (this._shouldIgnoreDragClick(character, event) || this.scene5Finalizing) return;
        if (!this.scene5CrossingAllowed) {
          character.classList.remove('is-hopping');
          void character.offsetWidth;
          character.classList.add('is-hopping');
          this.hints.show('Червоне світло: діти можуть підстрибнути, але не перейти дорогу.');
          return;
        }
        this.hints.show('Перетягни обох дітей на тротуар праворуч.');
      });
      character.addEventListener('animationend', (event) => {
        if (event.animationName === 'scene5-red-hop') {
          character.classList.remove('is-hopping');
        }
      });
    });
    this.el.scene5Key.addEventListener('click', (event) => {
      // Реагуємо лише на клік безпосередньо по зображенню ключа
      if (event.target.tagName !== 'IMG') return;
      this.startFinalCutscene();
    });
    this.el.treeCrown.addEventListener('click', () => this._shakeTree());
    this.el.forestSquirrel.addEventListener('click', (event) => {
      if (!this._shouldIgnoreDragClick(this.el.forestSquirrel, event)) this._tapSquirrel();
    });
    this.el.forestKey.addEventListener('click', () => this._collectForestKey());
    this.el.riverEquipment.forEach((item) => {
      item.addEventListener('click', () => this._useRiverEquipment(item));
    });
    [...this.el.riverLeftCharacters, ...this.el.riverRightCharacters].forEach((character) => {
      character.addEventListener('click', (event) => {
        if (!this._shouldIgnoreDragClick(character, event)) {
          this._reactToRiverCharacter(character);
        }
      });
      character.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this._reactToRiverCharacter(character);
        }
      });
    });
    this.el.riverLeftCharacters.forEach((character) => this._enableRiverCharacterDrag(character));
    this.el.riverRightCharacters.forEach((character) => this._enableRiverCharacterDrag(character));
    this.el.riverRaft.addEventListener('animationend', (event) => {
      if (event.animationName === 'raft-crossing') this._finishRiverCrossing();
    });
    this.el.riverKey.addEventListener('click', () => this._collectRiverKey());

    [this.el.sceneDog, this.el.sceneGirl, this.el.sceneBoy].forEach((character) => {
      this._enableCharacterDrag(character, this.el.objectsLayer, [this.el.treeHollow], null, true);
    });
    this._enableCharacterDrag(
      this.el.forestSquirrel,
      this.el.objectsLayer,
      [this.el.treeHollow],
      null,
      true,
    );
    this.el.forestNuts.forEach((nut) => {
      nut.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
      this._enableCharacterDrag(
        nut,
        this.el.objectsLayer,
        [this.el.treeHollow, this.el.forestSquirrel],
        (target) => this._feedSquirrel(nut, target),
      );
    });
  }

  _enableCharacterDrag(
    character,
    stage = this.el.objectsLayer,
    dropZones = [],
    onDrop = null,
    useGravity = false,
    canDrag = () => true,
    constrainDrag = null,
    onDragEnd = null,
  ) {
    character.addEventListener('pointerdown', (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      if (character.classList.contains('is-falling') || !canDrag()) return;

      const stageRect = stage.getBoundingClientRect();
      const characterRect = character.getBoundingClientRect();
      this.dragState = {
        character,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        left: characterRect.left - stageRect.left,
        top: characterRect.top - stageRect.top,
        width: characterRect.width,
        height: characterRect.height,
        moved: false,
      };

      character.classList.remove('is-landing');
      character.classList.remove('is-ground-impact', 'is-seated');
      character.classList.add('is-dragging');
      character.setPointerCapture(event.pointerId);

      // Радісний звук при підйомі дітлаха (тільки в 5й сцені)
      if (this.el.locationScreen.dataset.location === STATES.LOCATION_5) {
        this.sound.playSFX('sfx_cheer');
      }
    });

    character.addEventListener('pointermove', (event) => {
      const drag = this.dragState;
      if (!drag || drag.character !== character || drag.pointerId !== event.pointerId) return;

      const deltaX = event.clientX - drag.startX;
      const deltaY = event.clientY - drag.startY;
      if (Math.hypot(deltaX, deltaY) > 4) drag.moved = true;
      if (!drag.moved) return;

      const stageRect = stage.getBoundingClientRect();
      const position = constrainDrag
        ? constrainDrag({ drag, deltaX, deltaY, stageRect })
        : {
          left: Math.max(0, Math.min(stageRect.width - drag.width, drag.left + deltaX)),
          top: Math.max(0, Math.min(stageRect.height - drag.height, drag.top + deltaY)),
        };
      const left = Math.max(0, Math.min(stageRect.width - drag.width, position.left));
      const top = Math.max(0, Math.min(stageRect.height - drag.height, position.top));
      character.style.left = `${(left / stageRect.width) * 100}%`;
      character.style.top = `${(top / stageRect.height) * 100}%`;
      character.style.right = 'auto';
      character.style.bottom = 'auto';
      dropZones.forEach((dropZone) => {
        dropZone.classList.toggle('is-target', this._isOverDropZone(character, dropZone));
      });
    });

    const finishDrag = (event) => {
      const drag = this.dragState;
      if (!drag || drag.character !== character || drag.pointerId !== event.pointerId) return;

      this.dragState = null;
      character.classList.remove('is-dragging');
      if (dropZones.length > 0) {
        const target = event.type !== 'pointercancel'
          && drag.moved
          && dropZones.find((dropZone) => this._isOverDropZone(character, dropZone));
        dropZones.forEach((dropZone) => {
          dropZone.classList.remove('is-target');
          dropZone.classList.toggle('is-dropped', dropZone === target);
        });
        if (target && onDrop) {
          onDrop(target);
        } else if (target) {
          this.hints.show('Персонаж біля дупла дуба!');
        }
      }
      if (drag.moved) {
        this.suppressedDragClicks.add(character);
        window.setTimeout(() => this.suppressedDragClicks.delete(character), 300);
        if (useGravity) {
          this._settleCharacter(character, stage);
        } else {
          character.classList.add('is-landing');
          window.setTimeout(() => character.classList.remove('is-landing'), 170);
        }
      }
      if (character.hasPointerCapture(event.pointerId)) {
        character.releasePointerCapture(event.pointerId);
      }
      if (onDragEnd) {
        onDragEnd({
          drag,
          moved: drag.moved,
          cancelled: event.type === 'pointercancel',
        });
      }
    };

    character.addEventListener('pointerup', finishDrag);
    character.addEventListener('pointercancel', finishDrag);
  }

  async _settleCharacter(character, stage, returnPosition = null) {
    const stageRect = stage.getBoundingClientRect();
    const characterRect = character.getBoundingClientRect();
    const location = this.config.locations.find(
      (item) => item.id === this.el.locationScreen.dataset.location,
    );
    const groundY = stageRect.height * (location?.groundY || 0.93);
    const currentTop = characterRect.top - stageRect.top;
    let landingY = groundY;
    if (character === this.el.forestSquirrel && location?.id === STATES.LOCATION_2) {
      const crownRect = this.el.treeCrown.getBoundingClientRect();
      const centerX = characterRect.left + characterRect.width / 2;
      const aboveBranch = characterRect.bottom <= crownRect.bottom;
      const overBranch = centerX >= crownRect.left && centerX <= crownRect.right;
      if (aboveBranch && overBranch) landingY = crownRect.bottom - stageRect.top;
    }
    const targetTop = returnPosition
      ? Math.max(0, Math.min(stageRect.height - characterRect.height, returnPosition.top))
      : Math.max(0, landingY - characterRect.height);
    const targetLeft = returnPosition
      ? Math.max(0, Math.min(stageRect.width - characterRect.width, returnPosition.left))
      : characterRect.left - stageRect.left;

    if (this._isSeatedOnBench(location, characterRect, stageRect)) {
      character.classList.add('is-seated');
      return;
    }

    character.classList.remove('is-ground-impact');
    if (!returnPosition && currentTop >= targetTop) {
      character.style.top = `${(targetTop / stageRect.height) * 100}%`;
      this._playGroundImpact(character);
      return;
    }

    const fallDistance = Math.abs(targetTop - currentTop);
    const duration = returnPosition
      ? Math.max(320, Math.min(780, Math.sqrt(fallDistance / stageRect.height) * 650))
      : Math.max(180, Math.sqrt((2 * fallDistance) / 3200) * 1000);
    character.classList.add('is-falling');
    const animation = character.animate([
      { left: `${characterRect.left - stageRect.left}px`, top: `${currentTop}px`, offset: 0 },
      ...(returnPosition
        ? [
          {
            left: `${targetLeft}px`,
            top: `${Math.min(stageRect.height - characterRect.height, targetTop + Math.min(3, fallDistance * 0.025))}px`,
            offset: 0.88,
          },
          {
            left: `${targetLeft}px`,
            top: `${Math.max(0, targetTop - Math.min(1.5, fallDistance * 0.01))}px`,
            offset: 0.96,
          },
        ]
        : []),
      { left: `${targetLeft}px`, top: `${targetTop}px`, offset: 1 },
    ], {
      duration,
      easing: returnPosition ? 'cubic-bezier(0.22, 0.68, 0.18, 1)' : 'cubic-bezier(0.4, 0, 1, 1)',
      fill: 'forwards',
    });

    try {
      await animation.finished;
      character.style.left = `${(targetLeft / stageRect.width) * 100}%`;
      character.style.top = `${(targetTop / stageRect.height) * 100}%`;
      if (returnPosition) {
        character.style.right = 'auto';
        character.style.bottom = 'auto';
      }
      this._playGroundImpact(character);
    } catch (error) {
      if (error.name !== 'AbortError') throw error;
    } finally {
      animation.cancel();
      character.classList.remove('is-falling');
    }
  }

  _isSeatedOnBench(location, characterRect, stageRect) {
    if (!location?.bench || location.id !== STATES.LOCATION_1) return false;

    const bench = location.bench;
    const benchLeft = stageRect.left + stageRect.width * bench.left;
    const benchRight = stageRect.left + stageRect.width * bench.right;
    const benchTop = stageRect.top + stageRect.height * bench.top;
    const feetY = characterRect.bottom;
    const centerX = characterRect.left + characterRect.width / 2;
    const centeredOverBench = centerX >= benchLeft && centerX <= benchRight;
    const seatedAtBenchHeight = Math.abs(feetY - benchTop) <= stageRect.height * bench.tolerance;
    return centeredOverBench && seatedAtBenchHeight;
  }

  _playGroundImpact(character) {
    character.classList.remove('is-ground-impact');
    void character.offsetWidth;
    character.classList.add('is-ground-impact');
    character.addEventListener('animationend', () => {
      character.classList.remove('is-ground-impact');
    }, { once: true });
  }

  _isOverDropZone(character, dropZone) {
    const characterRect = character.getBoundingClientRect();
    const zoneRect = dropZone.getBoundingClientRect();
    const centerX = characterRect.left + characterRect.width / 2;
    const centerY = characterRect.top + characterRect.height / 2;
    return centerX >= zoneRect.left && centerX <= zoneRect.right
      && centerY >= zoneRect.top && centerY <= zoneRect.bottom;
  }

  _suspendCaveVisuals() {
    this.el.locationScreen.classList.remove('is-cave-lit');
    this.el.gameContainer.classList.remove('is-cave-lit', 'is-cave-complete');
  }

  _resetCave() {
    this.caveGeneration++;
    if (this.caveKeyRevealTimer !== null) {
      window.clearTimeout(this.caveKeyRevealTimer);
      this.caveKeyRevealTimer = null;
    }
    this.caveLit = false;
    this.caveDarkVODone = false;
    this.cavePlacedCrystals.clear();
    this.caveDragState = null;
    this.selectedCaveCrystal = null;
    this.caveSuppressClick = null;
    this.caveKeyCollected = false;
    this.el.gameContainer.classList.remove('is-cave-lit', 'is-cave-complete');
    this.el.locationScreen.classList.remove('is-cave-lit');
    this.el.caveTorch.setAttribute('aria-pressed', 'false');
    this.el.caveTorch.setAttribute('aria-label', 'Смолоскип');
    this.el.caveTorch.classList.remove('is-lit');
    this.el.caveTorchFire.hidden = true;
    this.el.caveTorchFire.classList.remove('is-lit');
    
    // Скидаємо стани перетягування персонажів
    [this.el.sceneBoy, this.el.sceneGirl].forEach(character => {
      character.style.left = '';
      character.style.top = '';
      character.classList.remove('is-dragging');
    });
    
    this.el.caveKey.hidden = true;
    this.el.caveKey.disabled = false;
    this.el.caveKey.classList.remove('is-revealed');
    this.el.caveSockets.forEach((socket) => {
      socket.classList.remove('is-filled', 'is-target');
      socket.disabled = !this.caveLit;
      const image = socket.querySelector('img');
      image.hidden = true;
    });
    this.el.caveCrystals.forEach((crystal) => {
      crystal.hidden = false;
      crystal.disabled = !this.caveLit;
      crystal.classList.remove('is-dragging', 'is-revealing');
      ['left', 'top', 'right', 'bottom'].forEach((property) => {
        crystal.style.removeProperty(property);
      });
    });
  }

  // Функції для перетягування персонажів
  _startCharacterDrag(character, event) {
    const loc = this.el.locationScreen.dataset.location;
    // Дозволяємо тягти тільки в сцені парку (LOCATION_3 — персонажі-компаньони)
    // і НЕ в LOCATION_5 (там своя система drag через _enableCharacterDrag)
    if (loc !== STATES.LOCATION_3) return;
    if (event.button !== undefined && event.button !== 0) return;

    event.preventDefault();
    event.stopPropagation();

    const stageRect = this.el.gameContainer.getBoundingClientRect();
    const characterRect = character.getBoundingClientRect();

    const dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      currentX: characterRect.left - stageRect.left,
      currentY: characterRect.top - stageRect.top,
      isDragging: false,
    };

    if (character === this.el.sceneBoy) {
      this.boyDragState = dragState;
    } else if (character === this.el.sceneGirl) {
      this.girlDragState = dragState;
    }

    character.setPointerCapture(event.pointerId);
    character.classList.add('is-dragging');
    character.style.transition = 'none';

    // Радісний звук при підйомі персонажа
    this.sound.playSFX('sfx_cheer');
  }

  _moveCharacter(character, event) {
    const dragState = character === this.el.sceneBoy ? this.boyDragState : this.girlDragState;
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_3) return;

    event.preventDefault();

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    
    dragState.isDragging = true;

    const newX = dragState.currentX + deltaX;
    const newY = dragState.currentY + deltaY;
    
    character.style.left = `${newX}px`;
    character.style.top = `${newY}px`;
    character.style.right = 'auto'; // Забезпечити, що right не перебиває left
    character.style.bottom = 'auto'; // Забезпечити, що bottom не перебиває top
  }

  _endCharacterDrag(character, event) {
    const dragState = character === this.el.sceneBoy ? this.boyDragState : this.girlDragState;
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_3) return;

    event.preventDefault();
    character.classList.remove('is-dragging');
    character.style.transition = '';
    character.releasePointerCapture(event.pointerId);

    if (character === this.el.sceneBoy) {
      this.boyDragState = null;
    } else if (character === this.el.sceneGirl) {
      this.girlDragState = null;
    }

    // Тут можна додати логіку для фіксації позиції або повернення на початкове місце
    // Наприклад, щоб зберегти останню позицію, можна оновити стилі left/top
    character.style.left = character.style.left;
    character.style.top = character.style.top;
    character.style.right = '';
    character.style.bottom = '';

    // Додаємо в suppressedDragClicks, щоб запобігти кліку після drag
    if (dragState.isDragging) {
      this.suppressedDragClicks.add(character);
    }
  }

  _lightCave() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_3 || this.caveLit || !this.caveDarkVODone) return;
    
    this.caveLit = true;
    this.el.locationScreen.classList.add('is-cave-lit');
    this.el.gameContainer.classList.add('is-cave-lit');
    this.el.caveTorch.setAttribute('aria-pressed', 'true');
    this.el.caveTorch.setAttribute('aria-label', 'Чарівний смолоскип запалено');
    this.el.caveTorch.classList.add('is-lit');
    this.el.caveTorchFire.hidden = false;
    this.el.caveTorchFire.classList.add('is-lit');
    this.el.caveCrystals.forEach((crystal) => { crystal.disabled = false; });
    this.el.caveSockets.forEach((socket) => { socket.disabled = false; });
    this.sound.playSFX('sfx_torch');
    this.sound.queueVO('vo_cave_lit', null, 'LOCATION_3');
    this.hints.show('Печера засяяла! Перетягни чотири кристали у гнізда відповідної форми.');
  }

  _startCaveCrystalDrag(crystal, event) {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_3
      || !this.caveLit
      || this.cavePlacedCrystals.has(crystal.dataset.shape)
      || (event.button !== undefined && event.button !== 0)) return;

    const stageRect = this.el.objectsLayer.getBoundingClientRect();
    const crystalRect = crystal.getBoundingClientRect();
    const centerX = Math.max(
      crystalRect.width / 2,
      Math.min(stageRect.width - crystalRect.width / 2,
        crystalRect.left + crystalRect.width / 2 - stageRect.left),
    );
    const centerY = Math.max(
      crystalRect.height / 2,
      Math.min(stageRect.height - crystalRect.height / 2,
        crystalRect.top + crystalRect.height / 2 - stageRect.top),
    );
    this.caveDragState = {
      crystal,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      centerX,
      centerY,
      originLeft: crystal.style.left,
      originTop: crystal.style.top,
      originRight: crystal.style.right,
      originBottom: crystal.style.bottom,
      moved: false,
    };
    crystal.classList.add('is-dragging');
    crystal.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  _moveCaveCrystal(crystal, event) {
    const drag = this.caveDragState;
    if (!drag || drag.crystal !== crystal || drag.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    if (Math.hypot(deltaX, deltaY) > 5) drag.moved = true;
    if (!drag.moved) return;

    const stageRect = this.el.objectsLayer.getBoundingClientRect();
    const centerX = Math.max(
      crystal.offsetWidth / 2,
      Math.min(stageRect.width - crystal.offsetWidth / 2, drag.centerX + deltaX),
    );
    const centerY = Math.max(
      crystal.offsetHeight / 2,
      Math.min(stageRect.height - crystal.offsetHeight / 2, drag.centerY + deltaY),
    );
    crystal.style.left = `${(centerX / stageRect.width) * 100}%`;
    crystal.style.top = `${(centerY / stageRect.height) * 100}%`;
    crystal.style.right = 'auto';
    crystal.style.bottom = 'auto';
    const activeDropTarget = this._getCaveDropTarget(crystal);
    this.el.caveSockets.forEach((socket) => {
      socket.classList.toggle(
        'is-target',
        activeDropTarget === socket && socket.dataset.acceptShape === crystal.dataset.shape,
      );
    });
  }

  _getCaveDropTarget(crystal) {
    const crystalRect = crystal.getBoundingClientRect();
    const crystalCenterX = crystalRect.left + crystalRect.width / 2;
    const crystalCenterY = crystalRect.top + crystalRect.height / 2;
    let nearestSocket = null;
    let nearestDistance = Infinity;

    this.el.caveSockets.forEach((socket) => {
      const rect = socket.getBoundingClientRect();
      const dx = crystalCenterX - (rect.left + rect.width / 2);
      const dy = crystalCenterY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestSocket = socket;
      }
    });

    if (!nearestSocket) return null;
    const targetRect = nearestSocket.getBoundingClientRect();
    const dropRadius = Math.max(targetRect.width, targetRect.height) * 1.5;
    return nearestDistance <= dropRadius ? nearestSocket : null;
  }

  _finishCaveCrystalDrag(crystal, event) {
    const drag = this.caveDragState;
    if (!drag || drag.crystal !== crystal || drag.pointerId !== event.pointerId) return;
    this.caveDragState = null;
    crystal.classList.remove('is-dragging');
    const droppedSocket = drag.moved && event.type !== 'pointercancel'
      ? this._getCaveDropTarget(crystal)
      : null;
    this.el.caveSockets.forEach((socket) => socket.classList.remove('is-target'));
    if (drag.moved) {
      this.caveSuppressClick = crystal;
      window.setTimeout(() => {
        if (this.caveSuppressClick === crystal) this.caveSuppressClick = null;
      }, 300);
    }
    const acceptShape = droppedSocket
      ? droppedSocket.dataset.acceptShape || droppedSocket.dataset.shape
      : null;
    if (droppedSocket && acceptShape === crystal.dataset.shape) {
      this._placeCaveCrystal(crystal, droppedSocket);
    } else if (drag.moved) {
      crystal.style.left = drag.originLeft;
      crystal.style.top = drag.originTop;
      crystal.style.right = drag.originRight;
      crystal.style.bottom = drag.originBottom;
      if (event.type !== 'pointercancel') this.hints.show(droppedSocket
        ? 'Цей кристал підходить лише до гнізда такої самої форми.'
        : 'Перетягни кристал до відповідного гнізда на вівтарі.');
    }
    if (crystal.hasPointerCapture(event.pointerId)) crystal.releasePointerCapture(event.pointerId);
  }

  _placeCaveCrystal(crystal, socket) {
    const shape = crystal.dataset.shape;
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_3
      || !this.caveLit
      || !CAVE_PUZZLE_SHAPES.includes(shape)
      || !this.el.caveSockets.includes(socket)
      || (socket.dataset.acceptShape || socket.dataset.shape) !== shape
      || this.cavePlacedCrystals.has(shape)) return;
    this.cavePlacedCrystals.add(shape);
    socket.classList.add('is-filled');
    socket.disabled = true;
    socket.querySelector('img').hidden = false;
    crystal.hidden = true;
    this.selectedCaveCrystal = null;
    this.sound.playSFX('sfx_crystal');
    const puzzleSolved = this._isCavePuzzleSolved();
    if (puzzleSolved) {
      this.el.gameContainer.classList.add('is-cave-complete');
      this.sound.playSFX('sfx_puzzle');
      this.sound.queueVO('vo_altar', null, 'LOCATION_3');
      this.hints.show('Усі кристали на місці! Вівтар активовано.');
      const generation = this.caveGeneration;
      this.caveKeyRevealTimer = window.setTimeout(() => {
        this.caveKeyRevealTimer = null;
        if (generation !== this.caveGeneration) return;
        this._revealCaveKey();
      }, 800);
      return;
    }
    this.hints.show('Кристал встановлено. Знайди гнізда для решти фігур.');
  }

  _isCavePuzzleSolved() {
    return CAVE_PUZZLE_SHAPES.every((shape) => (
      this.cavePlacedCrystals.has(shape)
      && this.el.caveSockets.some((socket) => (
        socket.dataset.shape === shape && socket.classList.contains('is-filled')
      ))
    ));
  }

  _revealCaveKey() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_3
      || !this._isCavePuzzleSolved()
      || this.caveKeyCollected) return;
    this.el.caveKey.hidden = false;
    this.el.caveKey.classList.add('is-revealed');
    this.hints.show('З вівтаря з\\\'явилася наступна частина ключа!');
  }

  async _collectCaveKey() {
    if (this.caveKeyCollected
      || !this._isCavePuzzleSolved()
      || this.el.caveKey.hidden) return;

    this.caveKeyCollected = true;
    this.el.caveKey.disabled = true;
    const stageRect = this.el.gameContainer.getBoundingClientRect();
    const sourceRect = this.el.caveKey.getBoundingClientRect();
    const targetRect = this.el.keySlot3.getBoundingClientRect();
    const start = {
      left: sourceRect.left - stageRect.left,
      top: sourceRect.top - stageRect.top,
    };
    const end = {
      left: targetRect.left - stageRect.left,
      top: targetRect.top - stageRect.top,
    };
    const flyingKey = document.createElement('img');
    flyingKey.className = 'key-flight';
    flyingKey.src = 'key_part_2.png';
    flyingKey.alt = '';
    flyingKey.setAttribute('aria-hidden', 'true');
    Object.assign(flyingKey.style, {
      left: `${start.left}px`,
      top: `${start.top}px`,
      width: `${sourceRect.width}px`,
      height: `${sourceRect.height}px`,
    });
    this.el.gameContainer.appendChild(flyingKey);
    this.el.caveKey.classList.remove('is-revealed');
    this.el.caveKey.hidden = true;

    if (typeof flyingKey.animate === 'function') {
      const animation = flyingKey.animate([
        {
          left: `${start.left}px`,
          top: `${start.top}px`,
          width: `${sourceRect.width}px`,
          height: `${sourceRect.height}px`,
          transform: 'rotate(0) scale(1)',
        },
        {
          left: `${end.left}px`,
          top: `${end.top}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
          transform: 'rotate(300deg) scale(0.8)',
        },
      ], { duration: 700, easing: 'cubic-bezier(0.2, 0.75, 0.25, 1)' });
      await Promise.race([animation.finished.catch(() => {}), this._wait(900)]);
    } else {
      await this._wait(150);
    }

    flyingKey.remove();
    this.el.keySlot3.classList.add('is-filled');
    this.el.keySlotImage3.hidden = false;
    this.el.keyCount.textContent = '3/5';
    this.el.keyCount.setAttribute('aria-label', 'Зібрано 3 з 5 частин ключа');
    this.sound.playSFX('sfx_key');
    this.sound.queueVO('vo_key3', null, 'LOCATION_3');
    this._updateSceneNextArrow();
    this.hints.show('Третю частину ключа зібрано!');
  }

  _resetRiver() {
    this.riverEquipmentCollected.clear();
    this.riverCrossing = false;
    this.riverCrossed = false;
    this.riverKeyCollected = false;
    this.el.riverRaftStorage.replaceChildren();
    this.el.riverEquipment.forEach((item) => {
      item.hidden = false;
      item.disabled = false;
    });
    this.el.riverLeftCharacters.forEach((character) => {
      character.hidden = false;
      character.style.translate = '';
      delete character.dataset.dragOffset;
      character.classList.remove('is-falling', 'is-dragging', 'is-landing');
      const child = character.classList.contains('river-character-target--girl') ? 'girl' : 'boy';
      this._setRiverCharacterSprite(child, `river_${child}_hands_down`);
    });
    this.el.riverRightCharacters.forEach((character) => {
      character.hidden = true;
      character.style.translate = '';
      delete character.dataset.dragOffset;
      character.classList.remove('is-falling', 'is-dragging', 'is-landing');
    });
    this.el.riverRiders.forEach((rider) => {
      rider.hidden = true;
    });
    this.el.riverRaft.classList.remove('raft-crossing', 'is-crossed');
    this.riverPanelRevealed = false;
    this.el.riverEquipmentPanel.hidden = true;   // відкриється після VO
    this.el.riverKey.hidden = false;
    this.el.riverKey.disabled = true;
    this.el.riverKey.classList.remove('is-available');
    this.el.riverKey.setAttribute('aria-label', 'Четверта частина ключа на протилежному березі');
    this._updateRiverEquipmentProgress();
    if (this.riverCrossingTimer !== null) {
      window.clearTimeout(this.riverCrossingTimer);
      this.riverCrossingTimer = null;
    }
  }

  _resetScene5() {
    const hadCollectedFragment = !this.el.keySlotImage5.hidden;
    this.scene5Generation++;
    this.scene5Timers.forEach((resolve, timer) => {
      window.clearTimeout(timer);
      resolve();
    });
    this.scene5Timers.clear();
    this.scene5Pressing = false;
    this.scene5CrossingAllowed = false;
    this.scene5KeyCollected = false;
    this.scene5Finalizing = false;
    this.dragState = null;
    if (this.scene5SynthesisOverlay) {
      this.scene5SynthesisOverlay.remove();
      this.scene5SynthesisOverlay = null;
    }
    this.el.gameContainer.classList.remove('is-key-shaking');
    this.el.scene5Scene.classList.remove('is-finalizing');
    this.el.scene5Scene.removeAttribute('aria-busy');
    this.el.scene5Scene.dataset.signal = 'red';
    this.el.scene5Button.disabled = false;
    this.el.scene5Button.setAttribute('aria-pressed', 'false');
    this.el.scene5Button.classList.remove('is-pressing');
    this.el.scene5Key.hidden = false;
    this.el.scene5Key.disabled = true;
    this.el.scene5Key.classList.remove('is-available');
    this.el.scene5Key.classList.remove('is-target', 'is-dropped');
    this.el.scene5Destination.classList.remove('is-target', 'is-dropped');
    this.scene5CrossedCharacters.clear();
    this.el.scene5Characters.forEach((character) => {
      character.disabled = false;
      character.removeAttribute('aria-disabled');
      delete character.dataset.crossed;
      ['left', 'top', 'right', 'bottom'].forEach((property) => character.style.removeProperty(property));
      character.classList.remove('is-dragging', 'is-landing', 'is-blocked', 'is-hopping', 'is-crossed');
    });
    this.el.keySlot5.classList.remove('is-filled');
    this.el.keySlotImage5.hidden = true;
    if (hadCollectedFragment) {
      const collectedCount = Math.max(0, Number.parseInt(this.el.keyCount.textContent, 10) - 1);
      this.el.keyCount.textContent = `${collectedCount}/5`;
      this.el.keyCount.setAttribute('aria-label', `Зібрано ${collectedCount} з 5 частин ключа`);
    }
  }

  _waitScene5(ms) {
    return new Promise((resolve) => {
      const timer = window.setTimeout(() => {
        this.scene5Timers.delete(timer);
        resolve();
      }, ms);
      this.scene5Timers.set(timer, resolve);
    });
  }

  async _pressScene5Button() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_5
      || this.scene5Pressing || this.scene5CrossingAllowed) return;

    this.scene5Pressing = true;
    this.el.scene5Button.disabled = true;
    this.el.scene5Button.classList.add('is-pressing');
    const generation = this.scene5Generation;
    await this._waitScene5(220);
    if (generation !== this.scene5Generation
      || this.el.locationScreen.dataset.location !== STATES.LOCATION_5) return;

    this.el.scene5Button.classList.remove('is-pressing');
    await this._waitScene5(350);
    if (generation !== this.scene5Generation
      || this.el.locationScreen.dataset.location !== STATES.LOCATION_5) return;

    this.scene5CrossingAllowed = true;
    this.el.scene5Scene.dataset.signal = 'green';
    this.el.scene5Button.setAttribute('aria-pressed', 'true');
    this.sound.playSFX('sfx_button');
    this.sound.playSFX('sfx_traffic');
    this.sound.queueVO('vo_green_light', null, 'LOCATION_5');
    this.hints.show('Зелене світло! Тепер можна переходити.');
    window.dispatchEvent(new CustomEvent('onTrafficLightGreen', {
      detail: { location: STATES.LOCATION_5, crossingAllowed: true },
    }));
  }

  _finishScene5CharacterDrag(character, drag, moved, cancelled = false) {
    if (!moved || this.scene5Finalizing) return;
    character.classList.remove('is-landing');
    const position = {
      left: drag.left,
      top: drag.top,
    };

    if (cancelled || !this.scene5CrossingAllowed) {
      this._settleCharacter(character, this.el.scene5Scene, position);
      if (!cancelled) this.hints.show('Червоне світло: підйом дозволено, рухатися вперед — ні.');
      return;
    }

    const reachedRightSide = this._isOverDropZone(character, this.el.scene5Destination);
    if (!reachedRightSide) {
      this._settleCharacter(character, this.el.scene5Scene, position);
      this.hints.show('Перенеси дитину на тротуар праворуч.');
      return;
    }

    character.dataset.crossed = 'true';
    character.classList.add('is-crossed');
    // Опустити персонажа на рівень землі (основа світлофору)
    this._settleCharacter(character, this.el.scene5Scene);
    this.scene5CrossedCharacters.add(character.classList.contains('scene5-character--girl') ? 'girl' : 'boy');
    if (this.scene5CrossedCharacters.size === this.el.scene5Characters.length) {
      this.el.scene5Key.disabled = false;
      this.el.scene5Key.classList.add('is-available');
      this.sound.queueVO('vo_cross_done', null, 'LOCATION_5');
      this.hints.show('Обидві дитини перейшли! Натисни на пʼяту частину ключа.');
      return;
    }
    this.hints.show('Одна дитина вже перейшла. Перенеси другу на тротуар праворуч.');
  }

  startFinalCutscene() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_5
      || !this.scene5CrossingAllowed
      || this.scene5CrossedCharacters.size !== this.el.scene5Characters.length
      || this.scene5KeyCollected
      || this.scene5Finalizing) return;

    this.scene5KeyCollected = true;
    this.scene5Finalizing = true;
    this.el.scene5Scene.classList.add('is-finalizing');
    this.el.scene5Scene.setAttribute('aria-busy', 'true');
    this.el.scene5Key.hidden = true;
    this.el.scene5Key.disabled = true;
    this.el.scene5Characters.forEach((character) => {
      character.disabled = true;
      character.setAttribute('aria-disabled', 'true');
    });
    this.el.keySlot5.classList.add('is-filled');
    this.el.keySlotImage5.hidden = false;
    this.el.keyCount.textContent = '5/5';
    this.el.keyCount.setAttribute('aria-label', 'Зібрано 5 з 5 частин ключа');
    this.sound.playSFX('sfx_key');
    this.sound.queueVO('vo_key5', () => {
      this.hints.show('Зібрано всі частини! Магічний ключ відновлюється…');
      this.sm.transition(STATES.KEY_ASSEMBLY);
    }, 'LOCATION_5');
  }

  async _runKeySynthesis() {
    const hudWasHidden = this.el.sceneHud.hidden;
    this.el.sceneHud.hidden = false;
    const stageRect = this.el.gameContainer.getBoundingClientRect();
    const centerX = stageRect.width / 2;
    const centerY = stageRect.height / 2;
    const orbitRadius = Math.min(stageRect.width, stageRect.height) * 0.2;
    const fragmentSize = Math.max(48, stageRect.width * 0.055);
    const sources = [
      this.el.keySlotImage,
      this.el.keySlotImage2,
      this.el.keySlotImage3,
      this.el.keySlotImage4,
      this.el.keySlotImage5,
    ];
    const overlay = document.createElement('div');
    overlay.className = 'key-synthesis';
    overlay.setAttribute('aria-hidden', 'true');
    this.el.gameContainer.appendChild(overlay);
    this.scene5SynthesisOverlay = overlay;
    this.el.sceneHud.hidden = hudWasHidden;

    const backdrop = document.createElement('div');
    backdrop.className = 'key-synthesis-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    overlay.appendChild(backdrop);
    await backdrop.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 700, easing: 'ease-out', fill: 'forwards' },
    ).finished;

    const storyHook = document.createElement('div');
    storyHook.className = 'key-synthesis-story';
    const storyEyebrow = document.createElement('p');
    storyEyebrow.textContent = 'СЮЖЕТНИЙ ХУК';
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'П\'ять частин знову разом.';
    const storyText = document.createElement('span');
    storyText.textContent = 'Магія ключа пробуджується…';
    storyHook.append(storyEyebrow, storyTitle, storyText);
    overlay.appendChild(storyHook);
    await this._wait(850);
    const storyFade = storyHook.animate(
      [
        { opacity: 1, transform: 'translate(-50%, -50%) translateY(0)' },
        { opacity: 0, transform: 'translate(-50%, -50%) translateY(-12px)' },
      ],
      { duration: 250, easing: 'ease-in', fill: 'forwards' },
    );
    await storyFade.finished;
    storyHook.remove();

    const orbit = document.createElement('div');
    orbit.className = 'key-synthesis-orbit';
    const fragments = sources.map((source, index) => {
      const sourceRect = source.getBoundingClientRect();
      const angle = (Math.PI * 2 * index) / sources.length - Math.PI / 2;
      const x = centerX + Math.cos(angle) * orbitRadius;
      const y = centerY + Math.sin(angle) * orbitRadius;
      const fragment = document.createElement('img');
      fragment.className = 'key-synthesis-fragment';
      fragment.src = source.src;
      fragment.alt = '';
      fragment.draggable = false;
      Object.assign(fragment.style, {
        left: `${sourceRect.left - stageRect.left}px`,
        top: `${sourceRect.top - stageRect.top}px`,
        width: `${Math.max(sourceRect.width, 32)}px`,
        height: `${Math.max(sourceRect.height, 32)}px`,
      });
      overlay.appendChild(fragment);
      return { element: fragment, x, y };
    });

    const flyIn = fragments.map(({ element, x, y }, index) => {
      const animation = element.animate([
        {
          left: element.style.left,
          top: element.style.top,
          width: element.style.width,
          height: element.style.height,
          transform: 'rotate(0deg) scale(0.7)',
        },
        {
          left: `${x - fragmentSize / 2}px`,
          top: `${y - fragmentSize / 2}px`,
          width: `${fragmentSize}px`,
          height: `${fragmentSize}px`,
          transform: `rotate(${index * 72 - 144}deg) scale(1)`,
        },
      ], { duration: 650, easing: 'cubic-bezier(0.2, 0.75, 0.25, 1)', fill: 'forwards' });
      return animation.finished.then(() => {
        animation.cancel();
        Object.assign(element.style, {
          left: `${x - fragmentSize / 2}px`,
          top: `${y - fragmentSize / 2}px`,
          width: `${fragmentSize}px`,
          height: `${fragmentSize}px`,
          transform: '',
        });
        orbit.appendChild(element);
      });
    });
    overlay.appendChild(orbit);
    await Promise.all(flyIn);

    this.sound.playSFX('sfx_synthesis');
    const spinning = orbit.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(1440deg)' },
    ], { duration: 1500, easing: 'cubic-bezier(0.65, 0, 0.95, 1)', fill: 'forwards' });
    await spinning.finished;
    spinning.cancel();
    orbit.style.transform = 'rotate(1440deg)';

    const converge = fragments.map(({ element }) => {
      const left = centerX - fragmentSize / 2;
      const top = centerY - fragmentSize / 2;
      const animation = element.animate([
        { left: element.style.left, top: element.style.top, opacity: 1, transform: 'scale(1) rotate(0deg)' },
        { left: `${left}px`, top: `${top}px`, opacity: 0, transform: 'scale(0.1) rotate(540deg)' },
      ], { duration: 400, easing: 'cubic-bezier(0.7, 0, 1, 1)', fill: 'forwards' });
      return animation.finished;
    });
    await Promise.all(converge);
    orbit.remove();

    const smoke = document.createElement('div');
    smoke.className = 'key-synthesis-smoke is-active';
    const flash = document.createElement('div');
    flash.className = 'key-synthesis-flash is-active';
    overlay.append(smoke, flash);
    this.sound.playSFX('sfx_flash');
    this.el.gameContainer.classList.add('is-key-shaking');
    await this._wait(500);
    this.el.gameContainer.classList.remove('is-key-shaking');
    await this._wait(250);

    const mainKey = document.createElement('img');
    mainKey.className = 'key-synthesis-main';
    mainKey.src = this.assetLoader.getImage('key_main').src;
    mainKey.alt = '';
    overlay.appendChild(mainKey);
    const appearance = mainKey.animate([
      { opacity: 0, transform: 'translate(-50%, -50%) scale(0.15) rotate(-35deg)' },
      { opacity: 1, transform: 'translate(-50%, -50%) scale(1.15) rotate(8deg)', offset: 0.72 },
      { opacity: 1, transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
    ], { duration: 800, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', fill: 'forwards' });
    await appearance.finished;
    appearance.cancel();
    mainKey.classList.add('is-glowing');
    this.sm.transition(STATES.FINALE);
    overlay.classList.add('is-fading');
    await this._wait(700);
    overlay.remove();
    this.scene5SynthesisOverlay = null;
  }

  _canUseRiverEquipment(item) {
    if (this.riverCrossing || this.riverCrossed
      || this.riverEquipmentCollected.has(item.dataset.equipment)) return false;

    const equipment = item.dataset.equipment;
    const vests = this._countRiverEquipment('vest');
    const helmets = this._countRiverEquipment('helmet');
    const paddles = this._countRiverEquipment('paddle');
    if (equipment.startsWith('vest-')) return vests < 2;
    if (equipment.startsWith('helmet-')) return vests === 2 && helmets < 2;
    if (equipment.startsWith('paddle-')) return vests === 2 && helmets === 2 && paddles < 2;
    return false;
  }

  _useRiverEquipment(item) {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_4
      || !this._canUseRiverEquipment(item)) return;

    const equipment = item.dataset.equipment;
    if (equipment.startsWith('paddle-')) {
      const stowedItem = document.createElement('img');
      stowedItem.className = 'river-stowed-item';
      stowedItem.src = item.querySelector('img').src;
      stowedItem.alt = '';
      stowedItem.setAttribute('aria-hidden', 'true');
      this.el.riverRaftStorage.append(stowedItem);
    } else {
      const isVest = equipment.startsWith('vest-');
      const count = this._countRiverEquipment(isVest ? 'vest' : 'helmet');
      const child = count === 0 ? 'girl' : 'boy';
      const asset = `river_${child}_${isVest ? 'vest' : 'helmet_vest'}`;
      this._setRiverCharacterSprite(child, asset);
      const character = this.el.riverLeftCharacters.find((target) =>
        target.classList.contains(`river-character-target--${child}`));
      if (character) this._playRiverLanding(character);
    }

    item.hidden = true;
    this.riverEquipmentCollected.add(equipment);
    this.sound.playSFX('sfx_equip');
    this._updateRiverEquipmentProgress();
    const count = this.riverEquipmentCollected.size;
    if (count === this.el.riverEquipment.length) {
      this._startRiverCrossing();
      return;
    }
    this.hints.show(`Спорядження зібрано: ${count}/6.`);
  }

  _countRiverEquipment(prefix) {
    return this.el.riverEquipment
      .filter((item) => item.dataset.equipment.startsWith(`${prefix}-`)
        && this.riverEquipmentCollected.has(item.dataset.equipment)).length;
  }

  _setRiverCharacterSprite(child, assetId) {
    const src = this.assetLoader.getImage(assetId).src;
    [...this.el.riverLeftCharacters, ...this.el.riverRightCharacters]
      .filter((character) => character.classList.contains(`river-character-target--${child}`))
      .forEach((character) => {
        character.querySelector('.river-character').src = src;
        character.classList.toggle(
          'has-wide-sprite',
          child === 'boy' && assetId !== 'river_boy_hands_down',
        );
      });
  }

  _updateRiverEquipmentProgress() {
    const vests = this._countRiverEquipment('vest');
    const helmets = this._countRiverEquipment('helmet');
    const paddles = this._countRiverEquipment('paddle');
    this.el.riverEquipment.forEach((item) => {
      item.disabled = !this._canUseRiverEquipment(item);
      item.classList.toggle('is-locked', item.disabled);
    });
    this.el.riverEquipmentProgress.textContent = vests === 2 && helmets === 2 && paddles === 2
      ? 'Спорядження зібрано: 6/6. Переправа готова!'
      : `Жилети: ${vests}/2 · каски: ${helmets}/2 · весла: ${paddles}/2`;
  }

  _enableRiverCharacterDrag(character) {
    let drag = null;

    character.addEventListener('pointerdown', (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      if (character.classList.contains('is-falling') || this.riverCrossing || this.riverCrossed || character.hidden) return;
      const [baseX, baseY] = (character.dataset.dragOffset || '0,0').split(',').map(Number);
      drag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        baseX,
        baseY,
        moved: false,
      };
      character.setPointerCapture(event.pointerId);
      character.classList.remove('is-landing');
      character.classList.add('is-dragging');
    });

    character.addEventListener('pointermove', (event) => {
      if (!drag || drag.pointerId !== event.pointerId) return;
      const dx = event.clientX - drag.startX;
      const dy = event.clientY - drag.startY;
      if (!drag.moved && Math.hypot(dx, dy) <= 4) return;
      drag.moved = true;
      const stageRect = this.el.locationScreen.getBoundingClientRect();
      const rect = character.getBoundingClientRect();
      let x = drag.baseX + dx;
      let y = Math.min(drag.baseY + dy, 0);
      const naturalLeft = rect.left - stageRect.left - this._riverOffset(character).x;
      x = Math.max(-naturalLeft, Math.min(stageRect.width * 0.16, x));
      y = Math.max(y, -stageRect.height * 0.5);
      character.style.translate = `${x}px ${y}px`;
      character.style.setProperty('--lift', `${-y}px`);
      character.dataset.dragOffset = `${x},${y}`;
    });

    const finish = (event) => {
      if (!drag || drag.pointerId !== event.pointerId) return;
      const moved = drag.moved;
      drag = null;
      character.classList.remove('is-dragging');
      if (character.hasPointerCapture(event.pointerId)) character.releasePointerCapture(event.pointerId);
      if (!moved) return;
      this.suppressedDragClicks.add(character);
      window.setTimeout(() => this.suppressedDragClicks.delete(character), 300);
      this._dropRiverCharacterToGround(character);
    };
    character.addEventListener('pointerup', finish);
    character.addEventListener('pointercancel', finish);
  }

  _riverOffset(character) {
    const [x, y] = (character.dataset.dragOffset || '0,0').split(',').map(Number);
    return { x, y };
  }

  _playRiverLanding(character, grounded = false) {
    character.classList.remove('is-landing', 'is-grounded');
    void character.offsetWidth;
    character.classList.toggle('is-grounded', grounded);
    character.classList.add('is-landing');
    const clearLanding = (event) => {
      if (event.target !== character
        || !['river-character-land', 'river-character-settle'].includes(event.animationName)) return;
      character.classList.remove('is-landing', 'is-grounded');
      character.removeEventListener('animationend', clearLanding);
    };
    character.addEventListener('animationend', clearLanding);
    this.sound.playSound('pop');
  }

  _dropRiverCharacterToGround(character) {
    const { x, y } = this._riverOffset(character);
    if (y >= 0) {
      character.dataset.dragOffset = `${x},0`;
      character.style.translate = `${x}px 0px`;
      this._playRiverLanding(character);
      return;
    }
    const duration = Math.max(180, Math.sqrt((2 * -y) / 3200) * 1000);
    character.classList.add('is-falling');
    character.style.setProperty('--lift', '0px');
    const animation = character.animate([
      { translate: `${x}px ${y}px` },
      { translate: `${x}px 0px` },
    ], { duration, easing: 'cubic-bezier(0.4, 0, 1, 1)', fill: 'forwards' });
    animation.finished.then(() => {
      character.dataset.dragOffset = `${x},0`;
      character.style.translate = `${x}px 0px`;
      this._playRiverLanding(character, true);
    }).catch(() => {}).finally(() => {
      animation.cancel();
      character.classList.remove('is-falling');
    });
  }

  _reactToRiverCharacter(character) {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_4) return;
    character.classList.remove('is-reacting');
    void character.offsetWidth;
    character.classList.add('is-reacting');
    const clearReaction = (event) => {
      if (event.target !== character || event.animationName !== 'river-character-bounce') return;
      character.classList.remove('is-reacting');
      character.removeEventListener('animationend', clearReaction);
    };
    character.addEventListener('animationend', clearReaction);
    this.sound.playSound('pop');
    const characterName = character.classList.contains('river-character-target--girl') ? 'Дівчинка' : 'Хлопчик';
    this.hints.show(`${characterName} радіє зустрічі!`);
  }

  _startRiverCrossing() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_4
      || this.riverCrossing || this.riverCrossed) return;

    this.riverCrossing = true;
    this.el.riverEquipmentPanel.hidden = true;
    this.el.riverLeftCharacters.forEach((character) => {
      character.hidden = true;
    });
    this.el.riverRightCharacters.forEach((character) => {
      character.hidden = true;
    });
    this.el.riverRiders.forEach((rider) => {
      rider.hidden = false;
    });
    this.el.riverRaft.classList.add('raft-crossing');
    this.sound.playSFX('sfx_raft');
    this.sound.queueVO('vo_raft', null, 'LOCATION_4');
    this.riverCrossingTimer = window.setTimeout(() => {
      this.riverCrossingTimer = null;
      this._finishRiverCrossing();
    }, 3900);
    this.hints.show('Усі готові! Човен вирушає через річку.');
  }

  _cancelRiverCrossing() {
    if (this.riverCrossingTimer !== null) {
      window.clearTimeout(this.riverCrossingTimer);
      this.riverCrossingTimer = null;
    }
    if (!this.riverCrossing) return;

    this.riverCrossing = false;
    this.el.riverRaft.getAnimations().forEach((animation) => animation.cancel());
    this.el.riverRaft.classList.remove('raft-crossing');
    this.el.riverRiders.forEach((rider) => {
      rider.hidden = true;
    });
    this.el.riverLeftCharacters.forEach((character) => {
      character.hidden = false;
    });
    this.el.riverRightCharacters.forEach((character) => {
      character.hidden = true;
    });
  }

  _finishRiverCrossing() {
    if (!this.riverCrossing) return;
    if (this.riverCrossingTimer !== null) {
      window.clearTimeout(this.riverCrossingTimer);
      this.riverCrossingTimer = null;
    }

    this.riverCrossing = false;
    this.riverCrossed = true;
    this.el.riverRaft.classList.remove('raft-crossing');
    this.el.riverRaft.classList.add('is-crossed');
    this.el.riverRaftStorage.replaceChildren();
    this.el.riverRiders.forEach((rider) => {
      rider.hidden = true;
    });
    this.el.riverRightCharacters.forEach((character) => {
      character.hidden = false;
    });
    this._showRiverKey();
    this.sound.queueVO('vo_river_done', null, 'LOCATION_4');
    this.hints.show('Ми перепливли! Заберіть частину ключа на березі.');
  }

  _showRiverKey() {
    if (this.riverKeyCollected) return;
    this.el.riverKey.hidden = false;
    this.el.riverKey.disabled = false;
    this.el.riverKey.classList.add('is-available');
    this.el.riverKey.setAttribute('aria-label', 'Зібрати четверту частину чарівного ключа');
  }

  _collectRiverKey() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_4
      || !this.riverCrossed || this.riverKeyCollected) return;

    this.riverKeyCollected = true;
    this.el.riverKey.hidden = true;
    this.el.riverKey.disabled = true;
    this.el.riverKey.classList.remove('is-available');
    this.el.keySlotImage4.hidden = false;
    this.el.keyCount.textContent = '4/5';
    this.el.keyCount.setAttribute('aria-label', 'Зібрано 4 з 5 частин ключа');
    this.sound.playSFX('sfx_key');
    this.sound.queueVO('vo_key4', null, 'LOCATION_4');
    this._updateSceneNextArrow();
    this.hints.show('Четверту частину ключа зібрано! Місія пройдена!');
  }

  _shakeTree() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_2) return;

    this.sound.playSFX('sfx_tree');
    this.el.forestCrownVisual.classList.remove('is-shaking');
    void this.el.forestCrownVisual.offsetWidth;
    this.el.forestCrownVisual.classList.add('is-shaking');
    window.setTimeout(() => {
      this.el.forestCrownVisual.classList.remove('is-shaking');
      if (!this.nutsReleased) this._releaseForestNuts();
    }, 450);
  }

  _releaseForestNuts() {
    this.nutsReleased = true;
    this.sound.playSFX('sfx_nuts');
    this.el.forestNuts.forEach((nut) => {
      nut.setAttribute('aria-label', 'Горішок падає');
      nut.classList.add('is-falling');
      nut.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fallAndBounce') return;
        nut.style.left = getComputedStyle(nut).left;
        nut.style.top = getComputedStyle(nut).top;
        nut.classList.replace('is-falling', 'is-landed');
        nut.setAttribute('aria-label', 'Перетягнути горішок');
      }, { once: true });
    });
    this.hints.show('Горішки впали з дерева! Перетягни їх до білочки або в дупло.');
  }

  _feedSquirrel(nut, target) {
    if (target !== this.el.treeHollow) {
      const stageRect = this.el.objectsLayer.getBoundingClientRect();
      const nutRect = nut.getBoundingClientRect();
      const left = stageRect.width * 0.52;
      const top = Math.min(stageRect.height - nutRect.height, stageRect.height * 0.82);
      nut.style.left = `${(left / stageRect.width) * 100}%`;
      nut.style.top = `${(top / stageRect.height) * 100}%`;
      this._animateSquirrel('is-joyful', 'squirrelJoy');
      this.hints.show('Білочка помітила горішок. Перетягни його в дупло!');
      return;
    }

    nut.hidden = true;
    this.sound.playSound('pop');
    this.forestNutsDelivered++;
    this.el.treeHollow.classList.add('is-dropped');
    if (this.forestNutsDelivered >= this.el.forestNuts.length) {
      this._animateSquirrel('is-celebrating', 'squirrelCelebrate');
      this.sound.queueVO('vo_squirrel', () => {
        this.el.forestKey.hidden = false;
        this.el.forestKey.classList.add('is-revealed');
        this.hints.show('У дуплі з\'явилася друга частина ключа!');
      }, 'LOCATION_2');
      return;
    }
    this._animateSquirrel('is-joyful', 'squirrelJoy');
    this.hints.show('Білочка радіє горішку!');
  }

  _animateSquirrel(className, animationName) {
    this.el.forestSquirrel.classList.remove('is-tapped', 'is-joyful', 'is-celebrating');
    void this.el.forestSquirrel.offsetWidth;
    this.el.forestSquirrel.classList.add(className);
    const clearAnimation = (event) => {
      if (event.target === this.el.forestSquirrel && event.animationName === animationName) {
        this.el.forestSquirrel.classList.remove(className);
        this.el.forestSquirrel.removeEventListener('animationend', clearAnimation);
      }
    };
    this.el.forestSquirrel.addEventListener('animationend', clearAnimation);
  }

  _tapSquirrel() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_2) return;

    this._animateSquirrel('is-joyful', 'squirrelJoy');
  }

  async _collectForestKey() {
    if (this.forestKeyCollected || this.forestNutsDelivered < this.el.forestNuts.length) return;

    this.forestKeyCollected = true;
    this.el.forestKey.disabled = true;
    const stageRect = this.el.gameContainer.getBoundingClientRect();
    const sourceRect = this.el.forestKey.getBoundingClientRect();
    const targetRect = this.el.keySlot2.getBoundingClientRect();
    const start = {
      left: sourceRect.left - stageRect.left,
      top: sourceRect.top - stageRect.top,
    };
    const end = {
      left: targetRect.left - stageRect.left,
      top: targetRect.top - stageRect.top,
    };
    const flyingKey = document.createElement('img');
    flyingKey.className = 'key-flight';
    flyingKey.src = 'key_part_2.png';
    flyingKey.alt = '';
    flyingKey.setAttribute('aria-hidden', 'true');
    Object.assign(flyingKey.style, {
      left: `${start.left}px`,
      top: `${start.top}px`,
      width: `${sourceRect.width}px`,
      height: `${sourceRect.height}px`,
    });
    this.el.gameContainer.appendChild(flyingKey);
    this.el.forestKey.hidden = true;

    if (typeof flyingKey.animate === 'function') {
      const animation = flyingKey.animate([
        {
          left: `${start.left}px`,
          top: `${start.top}px`,
          width: `${sourceRect.width}px`,
          height: `${sourceRect.height}px`,
          transform: 'rotate(0) scale(1)',
        },
        {
          left: `${end.left}px`,
          top: `${end.top}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
          transform: 'rotate(300deg) scale(0.8)',
        },
      ], { duration: 700, easing: 'cubic-bezier(0.2, 0.75, 0.25, 1)' });
      await Promise.race([animation.finished.catch(() => {}), this._wait(900)]);
    } else {
      await this._wait(150);
    }

    flyingKey.remove();
    this.el.keySlot2.classList.add('is-filled');
    this.el.keySlotImage2.hidden = false;
    this.el.keyCount.textContent = '2/5';
    this.el.keyCount.setAttribute('aria-label', 'Зібрано 2 з 5 частин ключа');
    this.forestKeyCollected = true;
    this.sound.playSFX('sfx_key');
    this.sound.queueVO('vo_key2', null, 'LOCATION_2');
    this._updateSceneNextArrow();
    this.el.tapZone.hidden = false;
    this.hints.show('Другу частину ключа зібрано!');
  }

  _shouldIgnoreDragClick(character, event) {
    if (event.detail === 0 || !this.suppressedDragClicks.has(character)) return false;
    this.suppressedDragClicks.delete(character);
    return true;
  }

  /* ---- ЛОГІКА ЛОКАЦІЙ ---- */
  _applyLocation(loc) {
    this.el.locationScreen.dataset.location = loc.id;
    [this.el.sceneDog, this.el.sceneGirl, this.el.sceneBoy].forEach((character) => {
      ['left', 'right', 'top', 'bottom', 'width', 'height'].forEach((property) => {
        character.style.removeProperty(property);
      });
      character.classList.remove('is-dragging', 'is-landing');
    });

    // Фон
    if (loc.bgImage) {
      const img = this.assetLoader.getImage(loc.bgImage);
      const bgSrc = img ? img.src : this.config.assets.images.find((item) => item.id === loc.bgImage)?.src;
      this.el.bgLayer.style.backgroundImage = bgSrc ? `url("${bgSrc}")` : 'none';
      this.el.bgLayer.style.backgroundSize = 'cover';
      this.el.bgLayer.style.backgroundPosition = 'center';
      this.el.bgLayer.style.backgroundColor = bgSrc ? '' : (loc.bgColor || '#2c1f4a');
    } else {
      this.el.bgLayer.style.backgroundImage = 'none';
      this.el.bgLayer.style.backgroundColor = loc.bgColor || '#2c1f4a';
    }

    const isPark = loc.id === STATES.LOCATION_1;
    const isForest = loc.id === STATES.LOCATION_2;
    const isCave = loc.id === STATES.LOCATION_3;
    const isRiver = loc.id === STATES.LOCATION_4;
    const isScene5 = loc.id === STATES.LOCATION_5;
    if (isCave && this.caveLit) {
      this.el.locationScreen.classList.add('is-cave-lit');
      this.el.gameContainer.classList.add('is-cave-lit');
      if (this.cavePlacedCrystals.size >= this.el.caveSockets.length) {
        this.el.gameContainer.classList.add('is-cave-complete');
      }
    }
    if (isScene5) this._resetScene5();
    // Не скидаємо прогрес печери при кожному вході
    // if (isCave) this._resetCave();
    const boySprite = this.el.sceneBoy.querySelector('.forest-sprite');
    const girlSprite = this.el.sceneGirl.querySelector('.forest-sprite');
    boySprite.src = isPark
      ? 'boy-body.png'
      : this.assetLoader.getImage(isCave ? 'cave_boy' : 'forest_boy').src;
    girlSprite.src = isPark
      ? 'girl_hands_down.png'
      : this.assetLoader.getImage(isCave ? 'cave_girl' : 'forest_girl').src;
    this.el.sceneDog.classList.toggle('is-forest-character', isForest);
    this.el.sceneGirl.classList.toggle('is-forest-character', isForest);
    this.el.sceneBoy.classList.toggle('is-forest-character', isForest);
    this.el.sceneDog.setAttribute('aria-label', isForest
      ? 'Песик у казковому лісі'
      : this.dogHappy ? 'Щасливий песик' : 'Поговорити з песиком');
    this.el.sceneGirl.setAttribute('aria-label', isForest ? 'Дівчинка у казковому лісі' : 'Привітатися з дівчинкою');
    this.el.sceneBoy.setAttribute('aria-label', isForest ? 'Хлопчик у казковому лісі' : 'Привітатися з хлопчиком');
    this.el.sceneGirl.querySelector('.forest-sprite').alt = isForest
      ? 'Дівчинка у казковому лісі'
      : isCave ? 'Дівчинка біля печери' : 'Дівчинка у парку';
    this.el.sceneBoy.querySelector('.forest-sprite').alt = isForest
      ? 'Хлопчик у казковому лісі'
      : isCave ? 'Хлопчик біля печери' : 'Хлопчик у парку';
    if (isCave) {
      this.el.sceneGirl.setAttribute('aria-label', 'Дівчинка біля печери');
      this.el.sceneBoy.setAttribute('aria-label', 'Хлопчик біля печери');
    }
    [this.el.sceneDog, this.el.sceneGirl, this.el.sceneBoy].forEach((character) => {
      character.getAnimations().forEach((animation) => {
        if (!('animationName' in animation)) animation.cancel();
      });
      character.classList.remove('is-falling', 'is-ground-impact', 'is-seated');
    });
    this.el.tapZone.hidden = true;

    this.el.sceneHud.hidden = !isPark && !isForest && !isCave && !isRiver && !isScene5;
    this.el.locationScreen.classList.toggle('is-forest', isForest);
    this.el.btnBackPark.hidden = !isForest;
    this._updateSceneNextArrow();
    if (isRiver) {
      // Панель інвентарю: прихована до кінця vo_river, і прихована коли пліт пливе/переплив
      this.el.riverEquipmentPanel.hidden = !this.riverPanelRevealed || this.riverCrossing || this.riverCrossed;
      this.el.riverEquipment.forEach((item) => {
        item.hidden = this.riverEquipmentCollected.has(item.dataset.equipment);
      });
      this.el.riverLeftCharacters.forEach((character) => {
        character.hidden = this.riverCrossing || this.riverCrossed;
      });
      this.el.riverRightCharacters.forEach((character) => {
        character.hidden = !this.riverCrossed;
      });
      this.el.riverRiders.forEach((rider) => {
        rider.hidden = !this.riverCrossing;
      });
      this._updateRiverEquipmentProgress();
      this.el.riverRaft.classList.toggle('raft-crossing', this.riverCrossing);
      this.el.riverRaft.classList.toggle('is-crossed', this.riverCrossed);
      this.el.riverKey.hidden = this.riverKeyCollected;
      this.el.riverKey.disabled = !this.riverCrossed || this.riverKeyCollected;
      this.el.riverKey.classList.toggle('is-available', this.riverCrossed && !this.riverKeyCollected);
    }
    this.el.dogDialog.hidden = true;

    if (isPark) {
      this.hints.show(this.keyCollected
        ? 'Першу частину ключа зібрано. Стрілка веде до лісу.'
        : 'Знайди м\'ячик у кущах і допоможи песику.');
    } else if (isRiver) {
      this.hints.show(this.riverKeyCollected
        ? 'Четверту частину ключа зібрано! Місія пройдена!'
        : this.riverCrossed
          ? 'Ми перепливли! Заберіть частину ключа на березі.'
          : 'Натискайте спорядження по черзі: жилети, каски, потім весла.');
      if (!this.riverKeyCollected && !this.riverCrossed && !this.riverCrossing) {
        this.sound.queueVO('vo_river', () => {
          // Після VO про річку — з'являється панель інвентарю
          if (this.el.locationScreen.dataset.location === STATES.LOCATION_4
            && !this.riverCrossing && !this.riverCrossed) {
            this.riverPanelRevealed = true;
            this.el.riverEquipmentPanel.hidden = false;
          }
        }, 'LOCATION_4');
      }
    } else {
      this.hints.show(isForest && this.forestKeyCollected
        ? 'Другу частину ключа зібрано!'
        : loc.hintText || '');
      if (isForest && !this.forestKeyCollected) this.sound.queueVO('vo_forest', null, 'LOCATION_2');
      if (isCave && !this.caveLit) this.sound.queueVO('vo_cave_dark', () => { this.caveDarkVODone = true; }, 'LOCATION_3');
      if (isScene5 && !this.scene5CrossingAllowed) this.sound.queueVO('vo_red_light', null, 'LOCATION_5');
    }
  }

  _resetForest() {
    this.nutsReleased = false;
    this.forestNutsDelivered = 0;
    this.forestKeyCollected = false;
    this.el.forestCrownVisual.classList.remove('is-shaking');
    this.el.forestSquirrel.classList.remove('is-joyful', 'is-tapped', 'is-celebrating');
    this.el.forestSquirrel.hidden = false;
    this.el.treeHollow.classList.remove('is-target', 'is-dropped');
    this.el.forestSquirrel.classList.remove('is-target', 'is-dropped');
    this.el.forestKey.hidden = true;
    this.el.forestKey.disabled = false;
    this.el.forestKey.classList.remove('is-revealed');
    this.el.btnNextLocation.hidden = true;
    this.el.btnNextLocation.classList.remove('is-available');
    this.el.forestNuts.forEach((nut) => {
      nut.hidden = false;
      nut.classList.remove('is-falling', 'is-landed', 'is-dragging', 'is-landing');
      nut.setAttribute('aria-label', 'Горішок на гілці');
      ['left', 'right', 'top', 'bottom'].forEach((property) => nut.style.removeProperty(property));
    });
  }

  _resetPark() {
    this.dogHappy = false;
    this.keyCollected = false;
    this.dragState = null;
    this.el.sceneBall.getAnimations().forEach((animation) => animation.cancel());
    [this.el.sceneDog, this.el.sceneGirl, this.el.sceneBoy].forEach((character) => {
      ['left', 'right', 'top', 'bottom'].forEach((property) => character.style.removeProperty(property));
      character.classList.remove('is-dragging', 'is-landing');
    });
    this.el.sceneBall.hidden = false;
    this.el.sceneBall.classList.remove('is-delivered', 'is-dragging', 'is-landing');
    this.el.sceneBall.setAttribute('aria-label', 'Перетягнути м\'ячик до песика');
    ['left', 'top', 'right', 'bottom', 'width'].forEach((property) => {
      this.el.sceneBall.style.removeProperty(property);
    });
    this.el.dogDropZone.classList.remove('is-target', 'is-dropped');
    this.el.locationScreen.classList.remove('has-next-location');
    this.el.sceneDog.classList.remove('is-happy');
    this.el.sceneDog.setAttribute('aria-label', 'Поговорити з песиком');
    this.el.sceneKey.getAnimations().forEach((animation) => animation.cancel());
    this.el.sceneKey.classList.remove('is-visible', 'is-flying', 'is-idle');
    this.el.sceneKey.disabled = false;
    ['left', 'top', 'right', 'bottom', 'width', 'height', 'transform', 'opacity']
      .forEach((property) => this.el.sceneKey.style.removeProperty(property));
    this.el.keySlot.classList.remove('is-filled');
    this.el.keySlotImage.hidden = true;
    this.el.keySlot2.classList.remove('is-filled');
    this.el.keySlotImage2.hidden = true;
    this.el.keySlot3.classList.remove('is-filled');
    this.el.keySlotImage3.hidden = true;
    this.el.keySlot4.classList.remove('is-filled');
    this.el.keySlotImage4.hidden = true;
    this.el.keySlot5.classList.remove('is-filled');
    this.el.keySlotImage5.hidden = true;
    this.el.keyCount.textContent = '0/5';
    this.el.keyCount.setAttribute('aria-label', 'Зібрано 0 з 5 частин ключа');
    
    // Додаткове скидання для персонажів
    [this.el.sceneBoy, this.el.sceneGirl].forEach(character => {
      character.style.left = '';
      character.style.top = '';
      character.classList.remove('is-dragging');
    });
    this.el.btnNextLocation.hidden = true;
    this.el.tapZone.hidden = true;
    this.el.btnBackPark.hidden = true;
    this.el.btnNextLocation.classList.remove('is-available');
    this.el.locationScreen.classList.remove('has-next-location');
    this.el.sceneHud.hidden = window.matchMedia('(max-width: 720px)').matches;
    this.el.dogDialog.hidden = true;
    this.el.kidsDialog.hidden = true;   // діалог замінено озвученням
    this.lastKid = this.el.sceneGirl;
  }

  _showKidsDialog(kid) {
    this.el.dogDialog.hidden = true;
    this.el.kidsDialog.hidden = true;   // замінено озвученням
    this.el.sceneHud.hidden = window.matchMedia('(max-width: 720px)').matches;
    this.lastKid = kid;
  }

  _interactWithDog() {
    if (this.dogHappy) return;
    this.el.kidsDialog.hidden = true;
    this.el.sceneHud.hidden = false;
    this.hints.hide();
    this.el.dogDialog.hidden = false;
    this.el.closeDialog.focus();
  }

  async _deliverBallToDog() {
    if (this.el.locationScreen.dataset.location !== STATES.LOCATION_1 || this.dogHappy) return;

    this.dogHappy = true;
    const stageRect = this.el.objectsLayer.getBoundingClientRect();
    const dogRect = this.el.sceneDog.getBoundingClientRect();
    const ballRect = this.el.sceneBall.getBoundingClientRect();
    const startLeft = ballRect.left - stageRect.left;
    const startTop = ballRect.top - stageRect.top;
    const ballSize = Math.max(72, Math.min(150, stageRect.width * 0.12));
    const left = dogRect.left - stageRect.left + dogRect.width * 0.12;
    const top = dogRect.bottom - stageRect.top - ballSize * 0.76;
    this.el.sceneBall.classList.add('is-delivered');
    this.el.sceneBall.setAttribute('aria-label', 'М\'ячик біля лап песика');
    Object.assign(this.el.sceneBall.style, {
      width: `${ballSize}px`,
    });
    const landing = this.el.sceneBall.animate([
      { left: `${startLeft}px`, top: `${startTop}px` },
      { left: `${left}px`, top: `${top}px` },
    ], { duration: 280, easing: 'cubic-bezier(0.2, 0.72, 0.2, 1)', fill: 'forwards' });
    try {
      await landing.finished;
    } catch (error) {
      if (error.name !== 'AbortError') throw error;
    } finally {
      if (!this.dogHappy) {
        landing.cancel();
        return;
      }
      Object.assign(this.el.sceneBall.style, {
        left: `${(left / stageRect.width) * 100}%`,
        top: `${(top / stageRect.height) * 100}%`,
        right: 'auto',
        bottom: 'auto',
      });
      landing.cancel();
    }
    this.el.sceneDog.classList.add('is-happy');
    this.el.sceneDog.setAttribute('aria-label', 'Щасливий песик');
    this.sound.playSFX('sfx_ball');
    this.sound.playSFX('sfx_dog_happy');
    this.sound.queueVO('vo_dog_thanks', () => {
      this._launchParkKey().then(() => {
        this.hints.show('Песик радіє м\'ячику! З\'явилася перша частина ключа.', 4500);
      });
    }, 'LOCATION_1');
  }

  async _launchParkKey() {
    const stageRect = this.el.objectsLayer.getBoundingClientRect();
    const dogRect = this.el.sceneDog.getBoundingClientRect();
    const key = this.el.sceneKey;
    const keySize = Math.min(112, Math.max(76, stageRect.width * 0.09));
    const start = {
      x: dogRect.left - stageRect.left + dogRect.width * 0.76,
      y: dogRect.top - stageRect.top + dogRect.height * 0.18,
    };
    const target = {
      x: stageRect.width * (stageRect.width < 600 ? 0.53 : 0.56),
      y: stageRect.height * 0.86,
    };
    const center = (point) => ({
      left: `${point.x - keySize / 2}px`,
      top: `${point.y - keySize / 2}px`,
    });
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const restingRotation = 450;

    Object.assign(key.style, {
      left: center(start).left,
      top: center(start).top,
      right: 'auto',
      bottom: 'auto',
      width: `${keySize}px`,
      height: `${keySize}px`,
    });
    key.disabled = true;
    key.classList.add('is-visible', 'is-flying');
    key.classList.remove('is-idle');

    if (typeof key.animate === 'function') {
      const flight = key.animate([
        {
          ...center(start),
          opacity: 0,
          transform: 'rotate(-20deg) scale(0.42)',
          offset: 0,
        },
        {
          ...center({ x: stageRect.width * 0.78, y: stageRect.height * 0.4 }),
          opacity: 1,
          transform: 'rotate(190deg) scale(1.08)',
          offset: 0.34,
        },
        {
          ...center({ x: stageRect.width * 0.62, y: stageRect.height * 0.51 }),
          opacity: 1,
          transform: 'rotate(350deg) scale(1)',
          offset: 0.68,
        },
        {
          ...center(target),
          opacity: 1,
          transform: `rotate(${restingRotation}deg) scale(1)`,
          offset: 1,
        },
      ], {
        duration: prefersReducedMotion ? 1 : 1450,
        easing: 'linear',
        fill: 'forwards',
      });

      try {
        await flight.finished;
      } catch (error) {
        if (error.name !== 'AbortError') throw error;
      }

      if (!this.dogHappy || this.keyCollected) return;
      Object.assign(key.style, center(target), {
        transform: `rotate(${restingRotation}deg)`,
        opacity: '1',
      });
      flight.cancel();

      const settle = key.animate([
        {
          top: center(target).top,
          transform: `rotate(${restingRotation}deg) scale(1)`,
          offset: 0,
        },
        {
          top: `${target.y - keySize / 2 - 9}px`,
          transform: `rotate(${restingRotation}deg) scale(0.94, 1.06)`,
          offset: 0.3,
        },
        {
          top: `${target.y - keySize / 2 - 2}px`,
          transform: `rotate(${restingRotation}deg) scale(1.04, 0.96)`,
          offset: 0.68,
        },
        {
          top: center(target).top,
          transform: `rotate(${restingRotation}deg) scale(1)`,
          offset: 1,
        },
      ], {
        duration: prefersReducedMotion ? 1 : 420,
        easing: 'cubic-bezier(0.2, 0.68, 0.32, 1)',
        fill: 'forwards',
      });

      try {
        await settle.finished;
      } catch (error) {
        if (error.name !== 'AbortError') throw error;
      }
      if (!this.dogHappy || this.keyCollected) return;
      key.style.top = center(target).top;
      key.style.transform = `rotate(${restingRotation}deg)`;
      settle.cancel();
    } else {
      Object.assign(key.style, center(target), {
        transform: `rotate(${restingRotation}deg)`,
        opacity: '1',
      });
    }

    key.classList.remove('is-flying');
    key.classList.add('is-idle');
    key.disabled = false;
  }

  async _returnBallToBushes(drag, moved, cancelled = false) {
    if (!moved || this.dogHappy || !drag) return;

    const stageRect = this.el.objectsLayer.getBoundingClientRect();
    const ballRect = this.el.sceneBall.getBoundingClientRect();
    const currentLeft = ballRect.left - stageRect.left;
    const currentTop = ballRect.top - stageRect.top;
    const duration = cancelled ? 260 : 420;
    const animation = this.el.sceneBall.animate([
      { left: `${currentLeft}px`, top: `${currentTop}px` },
      { left: `${drag.left}px`, top: `${drag.top}px` },
    ], {
      duration,
      easing: 'cubic-bezier(0.2, 0.72, 0.2, 1)',
      fill: 'forwards',
    });

    try {
      await animation.finished;
      this.el.sceneBall.style.left = `${(drag.left / stageRect.width) * 100}%`;
      this.el.sceneBall.style.top = `${(drag.top / stageRect.height) * 100}%`;
      this.el.sceneBall.style.right = 'auto';
      this.el.sceneBall.style.bottom = 'auto';
    } catch (error) {
      if (error.name !== 'AbortError') throw error;
    } finally {
      animation.cancel();
    }

    if (!cancelled) this.hints.show('Поклади м\'ячик біля песика.');
  }

  async _collectKey() {
    if (this.keyCollected || !this.dogHappy) return;

    this.keyCollected = true;
    this.el.sceneKey.disabled = true;
    const stageRect = this.el.gameContainer.getBoundingClientRect();
    const sourceRect = this.el.sceneKey.getBoundingClientRect();
    const targetRect = this.el.keySlot.getBoundingClientRect();
    const start = {
      left: sourceRect.left - stageRect.left,
      top: sourceRect.top - stageRect.top,
    };
    const end = {
      left: targetRect.left - stageRect.left,
      top: targetRect.top - stageRect.top,
    };
    const flyingKey = document.createElement('img');
    flyingKey.className = 'key-flight';
    flyingKey.src = 'key_part_2.png';
    flyingKey.alt = '';
    flyingKey.setAttribute('aria-hidden', 'true');
    Object.assign(flyingKey.style, {
      left: `${start.left}px`,
      top: `${start.top}px`,
      width: `${sourceRect.width}px`,
      height: `${sourceRect.height}px`,
    });
    this.el.gameContainer.appendChild(flyingKey);
    this.el.sceneKey.classList.remove('is-visible', 'is-idle');

    if (typeof flyingKey.animate === 'function') {
      const animation = flyingKey.animate([
        {
          left: `${start.left}px`,
          top: `${start.top}px`,
          width: `${sourceRect.width}px`,
          height: `${sourceRect.height}px`,
          transform: 'rotate(0) scale(1)',
        },
        {
          left: `${end.left}px`,
          top: `${end.top}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
          transform: 'rotate(300deg) scale(0.8)',
        },
      ], { duration: 700, easing: 'cubic-bezier(0.2, 0.75, 0.25, 1)' });
      await Promise.race([animation.finished.catch(() => {}), this._wait(900)]);
    } else {
      await this._wait(150);
    }

    flyingKey.remove();
    this.el.keySlot.classList.add('is-filled');
    this.el.keySlotImage.hidden = false;
    this.el.keyCount.textContent = '1/5';
    this.el.keyCount.setAttribute('aria-label', 'Зібрано 1 з 5 частин ключа');
    this.sound.playSFX('sfx_key');
    this.sound.queueVO('vo_key1', null, 'LOCATION_1');
    this._updateSceneNextArrow();
    this.hints.show('Ти зібрав першу частину ключа!');
  }

  _updateSceneNextArrow() {
    const location = this.el.locationScreen.dataset.location;
    const labels = {
      LOCATION_1: '',
      LOCATION_2: '',
      LOCATION_3: '',
      LOCATION_4: '',
      LOCATION_5: '',
    };
    const canContinue = location === STATES.LOCATION_1
      ? this.keyCollected
      : location === STATES.LOCATION_2
        ? this.forestKeyCollected
        : location === STATES.LOCATION_3
          ? this.caveKeyCollected
          : location === STATES.LOCATION_4
            ? this.riverKeyCollected
            : false;
    const arrow = this.el.btnNextLocation;
    const label = labels[location] || '';

    arrow.dataset.arrowText = label;
    arrow.querySelector('.arrow-text').textContent = label;
    arrow.setAttribute('aria-label', canContinue
      ? `Перейти далі: ${label}`
      : 'Перейти до наступної сцени');
    arrow.hidden = !canContinue;
    arrow.classList.toggle('is-available', canContinue);
    this.el.locationScreen.classList.toggle('has-next-location', canContinue);
  }

  _nextLocation() {
    // Не переходимо, поки звучить голосовий текст поточної сцени
    if (this.sound._voPlaying) return;

    const locs = this.config.locations;
    const nextIndex = this.currentLocationIndex + 1;

    if (nextIndex < locs.length) {
      this.sm.transition(locs[nextIndex].id);
    } else {
      // Після останньої локації — збір ключа (або фінал)
      this.sm.transition(STATES.KEY_ASSEMBLY);
    }
  }

  /* ---- ДОПОМІЖНІ ---- */
  _showScreen(name) {
    const map = {
      start:    this.el.startScreen,
      location: this.el.locationScreen,
      finale:   this.el.finaleScreen,
      'scene-select': this.el.sceneSelectScreen,
    };
    map[name] && map[name].classList.remove('hidden');
  }

  _hideScreen(name) {
    const map = {
      start:    this.el.startScreen,
      location: this.el.locationScreen,
      finale:   this.el.finaleScreen,
      'scene-select': this.el.sceneSelectScreen,
    };
    map[name] && map[name].classList.add('hidden');
  }

  _wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


/* ============================================================
   СТАРТ
   ============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  window.game = new Game();
  window.game.init();
});
