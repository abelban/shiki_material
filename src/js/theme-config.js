'use strict';

window.SHIKI_THEME_CONFIG = {
  "colors": [
    {
      "id": "color_text_primary",
      "category": "scheme",
      "block": "Цвета текстов",
      "name": "Цвет основной информации",
      "desc": "Используется для заголовков, описаний, комментариев и прочего.",
      "helper": "autoScheme"
    },
    {
      "id": "color_text_secondary",
      "category": "scheme",
      "block": "Цвета текстов",
      "name": "Цвет дополнительной информации",
      "desc": "Используется для дополняющего текста, подзаголовков и прочего.",
      "helper": "autoScheme"
    },
    {
      "id": "color_text_hint",
      "category": "scheme",
      "block": "Цвета текстов",
      "name": "Цвет подсказок",
      "desc": "Используется для подсказок к основному тексту.",
      "helper": "autoScheme"
    },
    {
      "id": "color_text_disabled",
      "category": "scheme",
      "block": "Цвета текстов",
      "name": "Цвет выключенного текста",
      "desc": "Используется для информационного текста и небольших подсказок.",
      "helper": "autoScheme"
    },
    {
      "id": "color_overlay_text_hovered",
      "category": "calculated",
      "block": "Цвета текстов",
      "name": "Подложка при наведении",
      "desc": "Подложка при наведении на элемент с цветом текста.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_overlay_text_selected",
      "category": "calculated",
      "block": "Цвета текстов",
      "name": "Подложка при выборе",
      "desc": "Подложка при выборе элемента с цветом текста.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_overlay_text_pressed",
      "category": "calculated",
      "block": "Цвета текстов",
      "name": "Подложка при нажатии",
      "desc": "Подложка при нажатии на элемент с цветом текста.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_link",
      "category": "pallete",
      "block": "Цвет ссылок",
      "name": "Ссылка",
      "desc": "Цвет ссылок в тексте, упоминаний, спойлеров и некоторых переключателей.",
      "helper": "autoLinks"
    },
    {
      "id": "color_link_hover",
      "category": "pallete",
      "block": "Цвет ссылок",
      "name": "Ссылка при наведении",
      "desc": "Цвет ссылок при наведении указателя мыши.",
      "helper": "autoLinks"
    },
    {
      "id": "color_link_active",
      "category": "pallete",
      "block": "Цвет ссылок",
      "name": "Ссылка при нажатии",
      "desc": "Цвет ссылок при нажатии указателем мыши.",
      "helper": "autoLinks"
    },
    {
      "id": "color_primary",
      "category": "pallete",
      "block": "Основной цвет",
      "name": "Основной",
      "desc": "Основная цветовая роль Material 3: кнопки, активные элементы и полоса аниме в профиле."
    },
    {
      "id": "color_text_on_primary",
      "category": "calculated",
      "block": "Основной цвет",
      "name": "Текст на основном цвете",
      "desc": "Цвет текста используемого на элементах, где фоном служит основной цвет.",
      "helper": "autoMainText"
    },
    {
      "id": "color_primary_reduced",
      "category": "calculated",
      "block": "Основной цвет",
      "name": "Контейнер основного цвета",
      "desc": "Тональный контейнер основного цвета; насыщенность зависит от светлой или тёмной схемы.",
      "helper": "autoMain"
    },
    {
      "id": "color_primary_hovered",
      "category": "calculated",
      "block": "Основной цвет",
      "name": "Основной при наведении",
      "desc": "Состояние наведения для элементов основного цвета.",
      "helper": "autoMain"
    },
    {
      "id": "color_primary_pressed",
      "category": "calculated",
      "block": "Основной цвет",
      "name": "Основной при нажатии",
      "desc": "Состояние нажатия для элементов основного цвета.",
      "helper": "autoMain"
    },
    {
      "id": "color_overlay_primary_hovered",
      "category": "calculated",
      "block": "Основной цвет",
      "name": "Подложка при наведении",
      "desc": "Полупрозрачная подложка основного цвета с непрозрачностью Material 3.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_overlay_primary_selected",
      "category": "calculated",
      "block": "Основной цвет",
      "name": "Подложка при выборе",
      "desc": "Полупрозрачная подложка выбранного элемента основного цвета.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_overlay_primary_pressed",
      "category": "calculated",
      "block": "Основной цвет",
      "name": "Подложка при нажатии",
      "desc": "Полупрозрачная подложка нажатого элемента основного цвета.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_accent",
      "category": "pallete",
      "block": "Вторичный цвет",
      "name": "Вторичный",
      "desc": "Вторичная цветовая роль Material 3: акценты и полоса манги в профиле."
    },
    {
      "id": "color_text_on_accent",
      "category": "calculated",
      "block": "Вторичный цвет",
      "name": "Текст на вторичном цвете",
      "desc": "Цвет текста на элементах, где фоном служит вторичный цвет.",
      "helper": "autoMainText"
    },
    {
      "id": "color_accent_reduced",
      "category": "calculated",
      "block": "Вторичный цвет",
      "name": "Контейнер вторичного цвета",
      "desc": "Тональный контейнер вторичного цвета; насыщенность зависит от светлой или тёмной схемы.",
      "helper": "autoMain"
    },
    {
      "id": "color_accent_fade",
      "category": "calculated",
      "block": "Вторичный цвет",
      "name": "Приглушённый вторичный",
      "desc": "Приглушённая вариация вторичного цвета для совместимости со старыми блоками.",
      "helper": "autoMain"
    },
    {
      "id": "color_overlay_accent_hovered",
      "category": "calculated",
      "block": "Вторичный цвет",
      "name": "Подложка при наведении",
      "desc": "Полупрозрачная подложка вторичного цвета с непрозрачностью Material 3.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_overlay_accent_selected",
      "category": "calculated",
      "block": "Вторичный цвет",
      "name": "Подложка при выборе",
      "desc": "Полупрозрачная подложка выбранного элемента вторичного цвета.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_overlay_accent_pressed",
      "category": "calculated",
      "block": "Вторичный цвет",
      "name": "Подложка при нажатии",
      "desc": "Полупрозрачная подложка нажатого элемента вторичного цвета.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_background",
      "category": "scheme",
      "block": "Фоновые цвета",
      "name": "Фон",
      "desc": "Фоновый цвет страницы; определяет прочие цвета сайта."
    },
    {
      "id": "color_background_translucent",
      "category": "calculated",
      "block": "Фоновые цвета",
      "name": "Фон",
      "desc": "Фоновый цвет страницы; определяет прочие цвета сайта.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_surface",
      "category": "scheme",
      "block": "Фоновые цвета",
      "name": "Контейнер поверхности",
      "desc": "Базовый тональный контейнер Material 3 для цитат, полей ввода и некоторых кнопок.",
      "helper": "autoScheme"
    },
    {
      "id": "color_surface_hover",
      "category": "calculated",
      "block": "Фоновые цвета",
      "name": "Высокий контейнер поверхности",
      "desc": "Тональная поверхность для состояния наведения и приподнятых элементов.",
      "helper": "autoScheme"
    },
    {
      "id": "color_surface_active",
      "category": "calculated",
      "block": "Фоновые цвета",
      "name": "Самый высокий контейнер поверхности",
      "desc": "Тональная поверхность для состояния нажатия и верхнего уровня вложенности.",
      "helper": "autoScheme"
    },
    {
      "id": "color_background_dialog",
      "category": "scheme",
      "block": "Фоновые цвета",
      "name": "Поверхность диалогов",
      "desc": "Высокий тональный контейнер для всплывающих окон и выпадающих меню.",
      "helper": "autoScheme"
    },
    {
      "id": "color_border",
      "category": "calculated",
      "block": "Фоновые цвета",
      "name": "Границы",
      "desc": "Цвет границ элементов и полос-разделителей.",
      "helper": "autoScheme"
    },
    {
      "id": "color_menu_background",
      "category": "pallete",
      "block": "Цвета верхнего меню",
      "name": "Меню",
      "desc": "Фоновый цвет верхнего меню; определяет внутренние цвета меню.",
      "helper": "autoMenuBg"
    },
    {
      "id": "color_menu_background_fade",
      "category": "pallete",
      "block": "Цвета верхнего меню",
      "name": "Полупрозрачный фон меню",
      "desc": "Полупрозрачная версия фона верхнего меню.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_menu_text_primary",
      "category": "calculated",
      "block": "Цвета верхнего меню",
      "name": "Цвет текста в меню",
      "desc": "Используется как для текста, так и для иконок.",
      "helper": "autoMenu"
    },
    {
      "id": "color_menu_text_disabled",
      "category": "calculated",
      "block": "Цвета верхнего меню",
      "name": "Выключенный текст в меню",
      "desc": "Цвет недоступного текста и иконок.",
      "helper": "autoMenu"
    },
    {
      "id": "color_menu_icon",
      "category": "calculated",
      "block": "Цвета верхнего меню",
      "name": "Иконки меню",
      "desc": "Цвет иконок верхнего меню.",
      "helper": "autoMenu"
    },
    {
      "id": "color_menu_background_hover",
      "category": "calculated",
      "block": "Цвета верхнего меню",
      "name": "Меню при наведении",
      "desc": "Фон элемента меню при наведении.",
      "helper": "autoMenu"
    },
    {
      "id": "color_menu_background_active",
      "category": "calculated",
      "block": "Цвета верхнего меню",
      "name": "Меню при нажатии",
      "desc": "Фон элемента меню при нажатии.",
      "helper": "autoMenu"
    },
    {
      "id": "color_menu_search",
      "category": "calculated",
      "block": "Цвета верхнего меню",
      "name": "Поле поиска",
      "desc": "Фон поля поиска в верхнем меню.",
      "helper": "autoMenu"
    },
    {
      "id": "color_menu_search_fade",
      "category": "calculated",
      "block": "Цвета верхнего меню",
      "name": "Подложка поиска",
      "desc": "Полупрозрачная подложка поля поиска.",
      "helper": "autoTranslucency"
    },
    {
      "id": "color_planned",
      "category": "calculated",
      "block": "Цвета кнопок списков",
      "name": "Запланировано",
      "desc": "Тональный цвет статуса «Запланировано».",
      "helper": "autoScheme"
    },
    {
      "id": "color_onhold",
      "category": "calculated",
      "block": "Цвета кнопок списков",
      "name": "Отложено",
      "desc": "Тональный цвет статуса «Отложено».",
      "helper": "autoScheme"
    },
    {
      "id": "color_watching",
      "category": "calculated",
      "block": "Цвета кнопок списков",
      "name": "Смотрю / читаю",
      "desc": "Тональный цвет активного просмотра или чтения.",
      "helper": "autoScheme"
    },
    {
      "id": "color_rewatching",
      "category": "calculated",
      "block": "Цвета кнопок списков",
      "name": "Пересматриваю / перечитываю",
      "desc": "Тональный цвет повторного просмотра или чтения.",
      "helper": "autoScheme"
    },
    {
      "id": "color_completed",
      "category": "calculated",
      "block": "Цвета кнопок списков",
      "name": "Просмотрено / прочитано",
      "desc": "Тональный цвет завершённого просмотра или чтения.",
      "helper": "autoScheme"
    },
    {
      "id": "color_dropped",
      "category": "calculated",
      "block": "Цвета кнопок списков",
      "name": "Брошено",
      "desc": "Тональный цвет статуса «Брошено».",
      "helper": "autoScheme"
    }
  ],
  "imports": [
    {
      "title": "Shiki Material 3 — полная сборка master",
      "desc": "Версия 3.0.0: основная тема, Material Symbols, обычная обложка профиля и актуальные дополнения.",
      "url": "main.css",
      "checked": true
    }
  ],
  "helpers": [
    {
      "id": "autoMainText",
      "title": "Текст на основных цветах",
      "description": "Контрастный цвет текста на элементах основного и вторичного цвета."
    },
    {
      "id": "autoLinks",
      "title": "Ссылки",
      "description": "Цвета копируются из основных цветов. Ссылка при нажатии затемняется."
    },
    {
      "id": "autoMenuBg",
      "title": "Фон меню",
      "description": "Цвет копируется из высокой поверхности диалогов для единой тональной иерархии."
    },
    {
      "id": "autoMain",
      "title": "Тональные контейнеры",
      "description": "Автоматические контейнеры основного и вторичного цвета с учётом светлой или тёмной схемы.",
      "disabled": true
    },
    {
      "id": "autoMenu",
      "title": "Цвета внутри меню",
      "description": "Цвет текста, иконок и слоёв состояния верхнего меню.",
      "disabled": true
    },
    {
      "id": "autoScheme",
      "title": "Цветовые роли Material 3",
      "description": "Тексты, границы и тональные поверхности вычисляются из фона по правилам Material 3.",
      "disabled": true
    },
    {
      "id": "autoTranslucency",
      "title": "Слои состояния",
      "description": "Автоматическое вычисление полупрозрачных слоёв наведения, выбора и нажатия Material 3.",
      "disabled": true
    }
  ],
  "palettes": [
    {
      "title": "Палитра Shikimori",
      "value": "default",
      "author": "morr",
      "scheme": "light",
      "palette": {
        "color_primary": "#4682B4",
        "color_accent": "#B78BC7",
        "color_background": "#ffffff",
        "color_menu_background": "#343434",
        "color_link": "#176093",
        "color_link_hover": "#dd5202",
        "color_link_active": "#ff0202"
      },
      "helpers": [
        "autoMain",
        "autoMainText",
        "autoScheme",
        "autoMenu",
        "autoTranslucency"
      ]
    },
    {
      "title": "Material 3 — светлая",
      "value": "light",
      "author": "abelban",
      "scheme": "light",
      "palette": {
        "color_primary": "#65558f",
        "color_text_on_primary": "#ffffff",
        "color_accent": "#625b71",
        "color_text_on_accent": "#ffffff",
        "color_background": "#fffbfe",
        "color_menu_background": "#4f378b",
        "color_link": "#65558f",
        "color_link_hover": "#4f378b",
        "color_link_active": "#7d5260"
      },
      "helpers": [
        "autoMain",
        "autoScheme",
        "autoMenu",
        "autoTranslucency"
      ]
    },
    {
      "title": "Material 3 — тёмная",
      "value": "dark",
      "author": "grin3671",
      "scheme": "dark",
      "palette": {
        "color_primary": "#d0bcff",
        "color_accent": "#ccc2dc",
        "color_background": "#1c1b1f",
        "color_menu_background": "#1c1b1f"
      },
      "helpers": [
        "autoMain",
        "autoMainText",
        "autoLinks",
        "autoScheme",
        "autoMenu",
        "autoTranslucency"
      ]
    },
    {
      "title": "Material 2 — светлая",
      "value": "material-light",
      "author": "MD Team",
      "scheme": "light",
      "palette": {
        "color_primary": "#6200ee",
        "color_accent": "#03dac5",
        "color_background": "#ffffff"
      }
    },
    {
      "title": "Material 2 — тёмная",
      "value": "material-dark",
      "author": "MD Team",
      "scheme": "dark",
      "palette": {
        "color_primary": "#bb86fc",
        "color_accent": "#03dac5",
        "color_background": "#121212"
      }
    },
    {
      "title": "Firewatch Night",
      "value": "firewatch-night",
      "author": "grin3671",
      "scheme": "dark",
      "palette": {
        "color_primary": "#7cc7e7",
        "color_accent": "#eccf77",
        "color_background": "#181c24"
      }
    },
    {
      "title": "Firewatch Sunset",
      "value": "firewatch-sunset",
      "author": "grin3671",
      "scheme": "dark",
      "palette": {
        "color_primary": "#f1be70",
        "color_accent": "#e07534",
        "color_background": "#151314",
        "color_text_primary": "#e8cfb1"
      }
    }
  ],
  "sources": {
    "theme_branch": "master",
    "theme_version": "3.0.0",
    "imports": "./theme/"
  }
};
