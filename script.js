TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_10EFD9D4_1DAE_677E_41B6_0D15A15EF290",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 10.44,
        "yaw": -16.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.09
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38, this.camera_13ED6AD1_1DD7_A576_41A6_1070B993585C); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -16.01,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": {
   "rollOverOpacity": 0.8,
   "fontFamily": "Arial",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "opacity": 0.4,
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "label": "ACCESO",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "HALL ACCESO",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "SALON",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "TERRAZA",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "360 BAÑO PPAL",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "360 HAB PPAL",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "360 BAÑO AUX",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "360 HAB AUX",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "360 BAÑO SOCIAL",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "360 HAB AUX - 2",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "360 BAÑO AUX - 2",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "360 CORREDOR",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "360 COCINA",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "360 TV",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    },
    {
     "label": "360 OFICINA CARO",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "class": "MenuItem"
    },
    {
     "label": "360 OFICINA ANDRES",
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "class": "MenuItem"
    },
    {
     "label": "360 SALA",
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "class": "MenuItem"
    }
   ],
   "rollOverBackgroundColor": "#000000"
  },
  "pitch": 0,
  "thumbnailUrl": "media/panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_t.jpg",
  "label": "ACCESO",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "gyroscopeEnabled": true,
  "gyroscopeVerticalDraggingEnabled": false,
  "buttonCardboardView": {
   "borderSize": 0,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "mode": "push",
   "maxWidth": 70,
   "maxHeight": 70,
   "transparencyActive": false,
   "propagateClick": false,
   "height": "76.75%",
   "paddingBottom": 0,
   "minHeight": 1,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "paddingLeft": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "data": {
    "name": "IconButton8475"
   },
   "borderRadius": 0,
   "minWidth": 1,
   "horizontalAlign": "center",
   "width": "17.15%",
   "backgroundOpacity": 0,
   "class": "IconButton",
   "paddingTop": 0
  },
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_acceleration",
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -17.4,
   "class": "PanoramaCameraPosition",
   "pitch": -1.01
  },
  "id": "panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_11F5CE4E_1DAE_DD6A_416B_D1DDF0F81D8D",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 10.44,
        "yaw": -7.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_19_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.34
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_11810756_1DAE_AB7A_41AD_3296BE468A33, this.camera_108C98D2_1DD7_A57A_4185_D64D6DA9955D); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -7.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_19_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.34
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11F5EE4E_1DAE_DD6A_41BA_F3156E85FA2E",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 10.43,
        "yaw": -155.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_20_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.85
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA, this.camera_10A0B901_1DD7_A4D6_41B4_9057BD9A780B); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -155.94,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_20_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.85
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11F51E4E_1DAE_DD6A_41AD_80635A1D2828",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B, this.camera_10BA1920_1DD7_A4D7_41B0_99EEE1B657FE); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -101.67,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_21_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.6
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11F53E4E_1DAE_DD6A_4199_64CFA91F8103",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9, this.camera_109B98E2_1DD7_A55A_418D_7D47A8F10342); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -80.82,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_22_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.35
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11F55E4E_1DAE_DD6A_4192_8080AEDBF354",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -49.67,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_23_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.09
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11F57E4E_1DAE_DD6A_41B0_3B35BBE2245C",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD, this.camera_10AD2911_1DD7_A4F6_41B1_B8B5C87226E7); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 91.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_0_HS_24_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -3.86
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_t.jpg",
  "label": "HALL ACCESO",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -133.76,
   "class": "PanoramaCameraPosition",
   "pitch": -4.07
  },
  "id": "panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_11810756_1DAE_AB7A_41AD_3296BE468A33",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_11813756_1DAE_AB7A_41BD_198A64011E3A",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 10.43,
        "yaw": -93.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_0_HS_12_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.35
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE, this.camera_11241817_1DD7_A4FA_419A_ED5A4EBED549); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -93.38,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_0_HS_12_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.35
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11812756_1DAE_AB7A_41B0_BD05E9128ECF",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 10.43,
        "yaw": -179.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_0_HS_13_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.35
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38, this.camera_1138E836_1DD7_A53A_41B0_CD90D452D74A); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -179.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_0_HS_13_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.35
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11FED756_1DAE_AB7A_41B8_FBDC6F809B26",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81, this.camera_11329826_1DD7_A4DB_41B5_0AE76E4ABF11); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 83.22,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_0_HS_14_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.84
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_t.jpg",
  "label": "SALON",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 5.8,
   "class": "PanoramaCameraPosition",
   "pitch": 2.81
  },
  "id": "panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_11A7A606_1DAF_ACDA_41A8_023B28A41307",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "hfov": 10.44,
        "yaw": 97.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.59
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE, this.camera_106A39C7_1DD7_A759_41AD_988A26F1B66A); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 97.04,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.59
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11A7B606_1DAF_ACDA_4185_0618E477B60B",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9, this.camera_105FA999_1DD7_A7F6_41A4_EA884C0CFC5E); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -179.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.1
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_t.jpg",
  "label": "TERRAZA",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_12D6B54E_1DAF_EF6A_41B5_242958335064",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A, this.camera_111C9B6E_1DD6_5B2A_41B2_D93A531556B6); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 109.6,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061_t.jpg",
  "label": "360 BA\u00d1O PPAL",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_1010E1A3_1DAE_67DA_4197_DF565FB8350F",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9, this.camera_13F88AE1_1DD7_A556_41B9_467A5E692947); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 51.07,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.59
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_1010D1A3_1DAE_67DA_41BB_ADBC8217DEF9",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061, this.camera_110C0B2B_1DD6_5B29_418D_DD9C626C840C); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 73.18,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_t.jpg",
  "label": "360 HAB PPAL",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_10209225_1DAE_E4DE_419E_A0FE0ADAB16C",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_133380D8_1DAE_6576_41B3_67A230EFDC21, this.camera_102A4A64_1DD7_A55E_41A5_15112D1A4D8D); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 52.32,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800_t.jpg",
  "label": "360 BA\u00d1O AUX",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_133380D8_1DAE_6576_41B3_67A230EFDC21",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_133360D8_1DAE_6576_41B2_1FAE477CD964",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800, this.camera_10533979_1DD7_A729_41BD_AA42E8874EF1); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 129.45,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.84
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_133350D8_1DAE_6576_41BC_C4168C8BEDB9",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9, this.camera_1040A947_1DD7_A75A_41AC_B19857BE2EF0); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 94.03,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_t.jpg",
  "label": "360 HAB AUX",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_118525CE_1DD1_EF6A_41B2_DDB94E18F712",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38, this.camera_11101B3C_1DD6_5B2E_4188_A8ECD427937E); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 33.23,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.34
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B_t.jpg",
  "label": "360 BA\u00d1O SOCIAL",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_13F4418F_1DD2_67EA_4182_53F7E8121439",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_13F4318F_1DD2_67EA_4199_6BB037018F65",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9, this.camera_13D2FAA2_1DD7_A5DA_4195_467AA4E756BB); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -96.65,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.1
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_13F4218F_1DD2_67EA_419C_B884286F6D85",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE, this.camera_13E3CAB2_1DD7_A53A_41AB_67D334038D34); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -130.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.6
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_t.jpg",
  "label": "360 HAB AUX - 2",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_camera",
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE",
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_1361E388_1DD2_ABD6_41BB_BA091E1606EF",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_13F4418F_1DD2_67EA_4182_53F7E8121439, this.camera_107579E7_1DD7_A75A_417E_68A4145782C2); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -52.69,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -3.1
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE_t.jpg",
  "label": "360 BA\u00d1O AUX - 2",
  "hfovMax": 130,
  "hfov": 360,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE_camera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_139F5301_1DD3_A4D6_4192_89C3D49AE78D",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A, this.camera_10D94875_1DD7_A53E_41BC_87C5F6817E0D); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 1.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.85
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_139F7301_1DD3_A4D6_41B3_B4C63FF20F31",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38, this.camera_10ECD894_1DD7_A5FE_41B3_8404312B5020); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 12.38,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.85
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_139F8301_1DD3_A4D6_41B5_978C3EC55475",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_133380D8_1DAE_6576_41B3_67A230EFDC21, this.camera_10CCC855_1DD7_A57E_41BA_0C9AF07C3317); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -8.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.1
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_139FB301_1DD3_A4D6_41A4_34CF5773772A",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_13F4418F_1DD2_67EA_4182_53F7E8121439, this.camera_10C68846_1DD7_A55A_4192_2B940A39A1DB); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -19.02,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.35
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_139FC301_1DD3_A4D6_41A2_BEEA3EC6CD81",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A, this.camera_10E7C884_1DD7_A5DE_41BC_533D1B78DF49); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 176.18,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.34
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_139FD301_1DD3_A4D6_41BA_914E7567F515",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E, this.camera_108658C3_1DD7_A55A_418A_0D0F2AF6D5FC); this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -163.22,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.34
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_139FE301_1DD3_A4D6_4177_3970CB163B78",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D, this.camera_10F918B3_1DD7_A53A_41A9_1C7161ABC27E); this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -173.02,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.34
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_t.jpg",
  "label": "360 CORREDOR",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -178.17,
   "class": "PanoramaCameraPosition",
   "pitch": -4.72
  },
  "id": "panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_11F1CA4A_1DD3_E56B_4198_FAC8498F6FF7",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11810756_1DAE_AB7A_41AD_3296BE468A33, this.camera_101FAA54_1DD7_A57E_41B7_EDF551B8C4E7); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 89.25,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.59
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_11F03A4A_1DD3_E56B_41A7_527C405A958D",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A, this.camera_100C0A35_1DD7_A53E_41B4_5A56AEE47143); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -89.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.34
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_t.jpg",
  "label": "360 COCINA",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_10141E2F_1DD2_5D2A_418C_B7B9150C2CA1",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38, this.camera_1035CA83_1DD7_A5DA_41AD_E824C9F4A7D3); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -82.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.85
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD_t.jpg",
  "label": "360 TV",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 87.5,
   "class": "PanoramaCameraPosition",
   "pitch": -4.03
  },
  "id": "panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_11B4774B_1DD2_EB6A_41A8_26A541C2BB54",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9, this.camera_1001DA06_1DD7_A4DA_41AC_82900346C7DD); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -164.23,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.09
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E_t.jpg",
  "label": "360 OFICINA CARO",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_12CC68CE_1DD2_656A_41A4_8956E0BFB782",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9, this.camera_111A1B4C_1DD6_5B6E_41BD_7963573EA5ED); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 149.55,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.6
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D_t.jpg",
  "label": "360 OFICINA ANDRES",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D_camera",
  "class": "PanoramaCamera"
 },
 {
  "hfovMin": 100,
  "hfov": 360,
  "partial": false,
  "id": "panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_1374BFC1_1DD1_FB59_41BD_B6A37967CD4F",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "areas": [
       {
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_11810756_1DAE_AB7A_41AD_3296BE468A33, this.camera_13C70A93_1DD7_A5FA_4165_9BA70C97E01C); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": -82.58,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "url": "media/panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.34
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "url": "media/panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81_hq.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81_t.jpg",
  "label": "360 SALA",
  "hfovMax": 100,
  "vfov": 180,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81_camera",
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11810756_1DAE_AB7A_41AD_3296BE468A33",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_133380D8_1DAE_6576_41B3_67A230EFDC21",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_13F4418F_1DD2_67EA_4182_53F7E8121439",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_10EFE9D4_1DAE_677E_41AD_D37276C221BA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11F5DE4E_1DAE_DD6A_419F_D66153BF4F38_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11810756_1DAE_AB7A_41AD_3296BE468A33",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11810756_1DAE_AB7A_41AD_3296BE468A33_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11A79606_1DAF_ACDA_41BC_5B585FA4182A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_12D6554E_1DAF_EF6A_41B0_84B494D11061_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1010F1A3_1DAE_67DA_419D_9813B045BB7A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1020A225_1DAE_E4DE_41B8_35FAA34CB800_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_133380D8_1DAE_6576_41B3_67A230EFDC21",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_133380D8_1DAE_6576_41B3_67A230EFDC21_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1184D5CE_1DD1_EF6A_41B5_722D0990935B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_13F4418F_1DD2_67EA_4182_53F7E8121439",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_13F4418F_1DD2_67EA_4182_53F7E8121439_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1361D388_1DD2_ABD6_4182_B885DDA8F7EE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_139F2301_1DD3_A4D6_41AB_A0AE2DEA5EF9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11F1DA4A_1DD3_E56B_41BA_E3A952A9D6FE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_10142E2F_1DD2_5D2A_41B6_517CD55458FD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11B4174B_1DD2_EB6A_41B5_30828497ED0E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_12CC88CE_1DD2_656A_4196_44D9A9EBE79D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1374AFC1_1DD1_FB59_41A2_8E0F78D93C81_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 0)"
   }
  ]
 },
 "this.Menu_111107D8_1DD7_AB76_41B0_C97CA690293F",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -90.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_11241817_1DD7_A4FA_419A_ED5A4EBED549",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 97.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_11329826_1DD7_A4DB_41B5_0AE76E4ABF11",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 172.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_1138E836_1DD7_A53A_41B0_CD90D452D74A",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 83.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10C68846_1DD7_A55A_4192_2B940A39A1DB",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -85.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10CCC855_1DD7_A57E_41BA_0C9AF07C3317",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10D94875_1DD7_A53E_41BC_87C5F6817E0D",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -128.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10E7C884_1DD7_A5DE_41BC_533D1B78DF49",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 99.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10ECD894_1DD7_A5FE_41B3_8404312B5020",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -30.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10F918B3_1DD7_A53A_41A9_1C7161ABC27E",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 15.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_108658C3_1DD7_A55A_418A_0D0F2AF6D5FC",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_108C98D2_1DD7_A57A_4185_D64D6DA9955D",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -167.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_109B98E2_1DD7_A55A_418D_7D47A8F10342",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 163.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10A0B901_1DD7_A4D6_41B4_9057BD9A780B",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 97.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10AD2911_1DD7_A4F6_41B1_B8B5C87226E7",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -146.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10BA1920_1DD7_A4D7_41B0_99EEE1B657FE",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 171.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_1040A947_1DD7_A75A_41AC_B19857BE2EF0",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -127.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_10533979_1DD7_A729_41BD_AA42E8874EF1",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -178.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_105FA999_1DD7_A7F6_41A4_EA884C0CFC5E",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 90.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_106A39C7_1DD7_A759_41AD_988A26F1B66A",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 49.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_107579E7_1DD7_A75A_417E_68A4145782C2",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 16.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_1001DA06_1DD7_A4DA_41AC_82900346C7DD",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -82.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_100C0A35_1DD7_A53E_41B4_5A56AEE47143",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 86.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_101FAA54_1DD7_A57E_41B7_EDF551B8C4E7",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -50.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_102A4A64_1DD7_A55E_41A5_15112D1A4D8D",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -88.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_1035CA83_1DD7_A5DA_41AD_E824C9F4A7D3",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -96.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_13C70A93_1DD7_A5FA_4165_9BA70C97E01C",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 160.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_13D2FAA2_1DD7_A5DA_4195_467AA4E756BB",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 127.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_13E3CAB2_1DD7_A53A_41AB_67D334038D34",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 24.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_13ED6AD1_1DD7_A576_41A6_1070B993585C",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -3.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_13F88AE1_1DD7_A556_41B9_467A5E692947",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -70.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_110C0B2B_1DD6_5B29_418D_DD9C626C840C",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 78.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_11101B3C_1DD6_5B2E_4188_A8ECD427937E",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 6.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_111A1B4C_1DD6_5B6E_41BD_7963573EA5ED",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -106.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "camera_111C9B6E_1DD6_5B2A_41B2_D93A531556B6",
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "duration": 5000,
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "class": "Photo",
  "height": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "duration": 5000,
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "class": "Photo",
  "height": 800,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "duration": 5000,
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "class": "Photo",
  "height": 800,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "duration": 5000,
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "class": "Photo",
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "duration": 5000,
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "class": "Photo",
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "duration": 5000,
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "class": "Photo",
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "label": "7. INT 3- CABA\u00d1A VT1",
  "duration": 5000,
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "class": "Photo",
  "height": 2000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  }
 }
], "children": [
 {
  "toolTipFontColor": "#FFFFFF",
  "toolTipFontSize": 13,
  "toolTipFontStyle": "normal",
  "toolTipFontWeight": "normal",
  "toolTipShadowOpacity": 0,
  "toolTipPaddingLeft": 14,
  "playbackBarHeadHeight": 15,
  "toolTipPaddingRight": 14,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "propagateClick": false,
  "progressRight": 0,
  "paddingBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "paddingLeft": 0,
  "progressBorderColor": "#000000",
  "toolTipPaddingBottom": 9,
  "toolTipTextShadowOpacity": 1,
  "shadow": false,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadow": true,
  "borderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#000000",
  "transitionDuration": 500,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "toolTipTextShadowVerticalLength": 0,
  "progressBorderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 9,
  "toolTipOpacity": 0.7,
  "progressHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeight": 10,
  "toolTipShadowColor": "#333333",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressLeft": 0,
  "height": "100%",
  "toolTipTextShadowHorizontalLength": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "width": "100%",
  "minHeight": 50,
  "paddingRight": 0,
  "playbackBarRight": 0,
  "playbackBarLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "top": 0,
  "playbackBarBorderSize": 0,
  "id": "MainViewer",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipBorderRadius": 1,
  "minWidth": 100,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundColorRatios": [
   0
  ],
  "left": 0,
  "class": "ViewerArea",
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "toolTipBorderSize": 0,
  "playbackBarBackgroundOpacity": 1
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "borderSize": 0,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipFontColor": "#FFFFFF",
      "mode": "toggle",
      "maxWidth": 70,
      "toolTipFontSize": 13,
      "toolTipFontStyle": "normal",
      "maxHeight": 70,
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 9,
      "toolTipOpacity": 0.7,
      "toolTipShadowOpacity": 0,
      "toolTipPaddingLeft": 14,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 14,
      "toolTipDisplayTime": 600,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTipShadowColor": "#333333",
      "propagateClick": false,
      "height": "76.75%",
      "paddingBottom": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "minHeight": 1,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipPaddingBottom": 9,
      "cursor": "hand",
      "toolTipTextShadowOpacity": 1,
      "shadow": false,
      "toolTip": "Full Screen",
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "data": {
       "name": "Icon fullscreen"
      },
      "borderRadius": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "width": "17.48%",
      "toolTipBorderRadius": 1,
      "backgroundOpacity": 0,
      "toolTipShadowSpread": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "paddingTop": 0,
      "toolTipBorderSize": 0,
      "toolTipTextShadowVerticalLength": 0
     },
     {
      "borderSize": 0,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipFontColor": "#FFFFFF",
      "mode": "toggle",
      "maxWidth": 70,
      "toolTipFontSize": 13,
      "toolTipFontStyle": "normal",
      "maxHeight": 70,
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 9,
      "toolTipOpacity": 0.7,
      "toolTipShadowOpacity": 0,
      "toolTipPaddingLeft": 14,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 14,
      "toolTipDisplayTime": 600,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTipShadowColor": "#333333",
      "propagateClick": false,
      "height": "76.75%",
      "paddingBottom": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "minHeight": 1,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipPaddingBottom": 9,
      "cursor": "hand",
      "toolTipTextShadowOpacity": 1,
      "shadow": false,
      "toolTip": "Audio On/Off",
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "data": {
       "name": "Icon audio"
      },
      "borderRadius": 0,
      "minWidth": 1,
      "horizontalAlign": "center",
      "width": "17.15%",
      "toolTipBorderRadius": 1,
      "backgroundOpacity": 0,
      "toolTipShadowSpread": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "paddingTop": 0,
      "toolTipBorderSize": 0,
      "toolTipTextShadowVerticalLength": 0
     }
    ],
    "borderSize": 0,
    "gap": 10,
    "propagateClick": false,
    "height": "100%",
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "minHeight": 1,
    "paddingRight": 0,
    "paddingLeft": 0,
    "creationPolicy": "delayed",
    "shadow": false,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "-Hide buttons"
    },
    "borderRadius": 0,
    "minWidth": 1,
    "horizontalAlign": "right",
    "overflow": "visible",
    "contentOpaque": false,
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "scrollBarMargin": 2,
    "class": "Container",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "layout": "horizontal"
   }
  ],
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "right": 25,
  "gap": 1,
  "propagateClick": false,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 50,
  "paddingRight": 0,
  "top": "89%",
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarOpacity": 0.5,
  "data": {
   "name": "--Settings Button Set"
  },
  "shadow": false,
  "minWidth": 265,
  "horizontalAlign": "right",
  "overflow": "visible",
  "contentOpaque": false,
  "borderRadius": 5,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "width": "22.545%",
  "scrollBarMargin": 2,
  "paddingTop": 0,
  "class": "Container",
  "layout": "horizontal"
 },
 {
  "borderSize": 0,
  "gap": 10,
  "propagateClick": false,
  "height": "25%",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "minHeight": 120,
  "paddingRight": 0,
  "top": "3.5%",
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "shadow": false,
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "scrollBarOpacity": 0.5,
  "data": {
   "name": "--Stickers Container"
  },
  "borderRadius": 0,
  "minWidth": 300,
  "horizontalAlign": "left",
  "overflow": "visible",
  "contentOpaque": false,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "left": "2.14%",
  "width": "21%",
  "scrollBarMargin": 2,
  "class": "Container",
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "layout": "vertical"
 },
 {
  "selectedItemLabelTextDecoration": "underline",
  "itemLabelFontWeight": "normal",
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelFontStyle": "normal",
  "gap": 10,
  "selectedItemLabelFontSize": 12,
  "itemMode": "normal",
  "itemThumbnailHeight": 80,
  "itemLabelFontColor": "#FFFFFF",
  "class": "ThumbnailList",
  "selectedItemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorRatios": [],
  "propagateClick": false,
  "paddingBottom": 20,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "verticalAlign": "top",
  "paddingLeft": 15,
  "selectedItemThumbnailShadow": true,
  "itemLabelFontSize": 12,
  "shadow": false,
  "horizontalAlign": "left",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "itemThumbnailScaleMode": "fit_outside",
  "borderRadius": 3,
  "backgroundOpacity": 0.25,
  "itemHorizontalAlign": "center",
  "itemThumbnailWidth": 80,
  "itemLabelHorizontalAlign": "center",
  "scrollBarWidth": 7,
  "itemLabelPosition": "bottom",
  "itemPaddingTop": 3,
  "itemBorderRadius": 0,
  "itemLabelFontFamily": "Arial",
  "scrollBarMargin": 4,
  "selectedItemBorderRadius": 0,
  "selectedItemLabelFontWeight": "bold",
  "selectedItemBackgroundColorRatios": [],
  "scrollBarColor": "#52B7EF",
  "itemVerticalAlign": "middle",
  "borderSize": 0,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemThumbnailShadowVerticalLength": 0,
  "backgroundColorRatios": [
   0
  ],
  "maxWidth": 150,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontWeight": "bold",
  "height": "82.127%",
  "itemBackgroundOpacity": 0,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadow": false,
  "selectedItemBackgroundColor": [],
  "itemLabelTextDecoration": "none",
  "minHeight": 1,
  "itemOpacity": 1,
  "scrollBarOpacity": 1,
  "paddingRight": 15,
  "top": "3.5%",
  "itemBackgroundColor": [],
  "visible": false,
  "itemLabelGap": 9,
  "selectedItemLabelFontStyle": "italic",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "itemPaddingLeft": 3,
  "itemThumbnailOpacity": 1,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "layout": "vertical",
  "selectedItemBorderSize": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "-ThumbnailList"
  },
  "itemPaddingRight": 3,
  "rollOverItemLabelTextDecoration": "underline",
  "backgroundColorDirection": "vertical",
  "selectedItemBackgroundOpacity": 0,
  "itemThumbnailBorderRadius": 50,
  "itemPaddingBottom": 3,
  "paddingTop": 20,
  "right": "2%"
 },
 {
  "children": [
   {
    "borderSize": 0,
    "gap": 10,
    "propagateClick": false,
    "height": "55.435%",
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "minHeight": 1,
    "paddingRight": 0,
    "paddingLeft": 0,
    "creationPolicy": "delayed",
    "shadow": false,
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "scrollBarOpacity": 0.5,
    "data": {
     "name": "Container Content"
    },
    "borderRadius": 0,
    "minWidth": 1,
    "horizontalAlign": "left",
    "overflow": "visible",
    "contentOpaque": false,
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "scrollBarMargin": 2,
    "class": "Container",
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "layout": "horizontal"
   }
  ],
  "borderSize": 0,
  "gap": 1,
  "height": 92,
  "propagateClick": false,
  "paddingBottom": 0,
  "verticalAlign": "bottom",
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "visible",
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "scrollBarOpacity": 0.5,
  "data": {
   "name": "-Discover Container"
  },
  "shadow": false,
  "minWidth": 1,
  "horizontalAlign": "left",
  "width": "37.394%",
  "contentOpaque": false,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "left": "2%",
  "layout": "vertical",
  "scrollBarMargin": 2,
  "class": "Container",
  "paddingTop": 0,
  "scrollBarColor": "#000000"
 },
 {
  "borderSize": 0,
  "right": "0.6%",
  "maxWidth": 485,
  "maxHeight": 265,
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "propagateClick": false,
  "height": "5%",
  "paddingBottom": 0,
  "minHeight": 1,
  "scaleMode": "fit_inside",
  "verticalAlign": "middle",
  "paddingRight": 0,
  "top": "0.98%",
  "paddingLeft": 0,
  "shadow": false,
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "data": {
   "name": "Image21736"
  },
  "borderRadius": 0,
  "minWidth": 1,
  "horizontalAlign": "center",
  "width": "5%",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "class": "Image"
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.85,
 "gap": 10,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 20,
 "scripts": {
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 },
 "paddingRight": 0,
 "paddingLeft": 0,
 "creationPolicy": "delayed",
 "shadow": false,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "data": {
  "name": "Player463"
 },
 "borderRadius": 0,
 "minWidth": 20,
 "horizontalAlign": "left",
 "overflow": "visible",
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "scrollBarMargin": 2,
 "class": "Player",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "width": "100%"
})