// DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    // Geräte
    AKKU__LEVEL: "o status de carregamento",
    AKKU__STATUS__0: "carga lenta",
    AKKU__STATUS__1: "carregamento da bateria",
    AKKU__STATUS__2: "bateria fornecida",
    AKKU__STATUS__3: "status da bateria desconhecido",
    ALARMACTUATOR__STATE__TRUE: "alarme",
    ALARMACTUATOR__STATE__FALSE: "OK",
    ALARMACTUATOR__ERROR_POWER__1: "tensão de rede incorreta",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "mensagem de sabotagem",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "bateria com defeito",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "Tempo de ligação",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__TRUE: "bateria fraca",
    ALARMACTUATOR__LOWBAT__FALSE: "-",
    BLIND__STOP: "stop",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "duração dos cegos",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "Nível de enchimento",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "frequência do sensor",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__TRUE: "on",
    CLIMATECONTROL_REGULATOR__STATE__FALSE: "off",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "auto",
    CLIMATECONTROL_REGULATOR__MODE__1: "conforto",
    CLIMATECONTROL_REGULATOR__MODE__2: "ECO",
    CLIMATECONTROL_REGULATOR__MODE__3: "off",
    CLIMATECONTROL_REGULATOR__VACATION__0: "off",
    CLIMATECONTROL_REGULATOR__VACATION__1: "planejado",
    CLIMATECONTROL_REGULATOR__VACATION__2: "ativo",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__TRUE: "controle invertido",
    CLIMATECONTROL_REGULATOR__SET_INVERT__FALSE: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "mudar Estado",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "valor manipulada recebidas do painel de controle",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "diferencial de valor nominal convertido",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "Conjunto de abertura da válvula",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__TRUE: "Modo de verão na",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__FALSE: "Modo de verão off",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "válvula fechada",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "válvula aberta",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "automaticamente",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "manualmente",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "Parte",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "temperatura de conforto",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "revés",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "janela de temperatura aberto",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "Party / férias fim",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "temperatura",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "umidade atual",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "atuador da válvula lento",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "ajustando gama muito grande",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "ajustando gama muito pequena",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "Erro de conexão",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "bateria fraca",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "Erro de posição da válvula",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "abertura da válvula",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "modo de reforço",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "abaixamento",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "manual",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "conforto",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "automático",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "aumentar a duração",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "Status da bateria",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "Modo de férias Start",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "set temperatura",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "hora de início",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "término",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__FALSE: "fechada",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__TRUE: "aberto",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "abertura da válvula",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "drive válvula bloqueada",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "válvula conduzir frouxamente",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "faixa de ajuste muito pequeno",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "bateria fraca",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "a posição do atuador da válvula compensar",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "temperatura",
    CLIMATECONTROL_VENT_DRIVE__ALARM__TRUE: "drive válvula bloqueada",
    CLIMATECONTROL_VENT_DRIVE__ALARM__FALSE: "-",
    CONDITION_POWER__DECISION_VALUE: "** CONDITION_POWER__DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "** CONDITION_CURRENT__DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "** CONDITION_VOLTAGE__DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "** CONDITION_FREQUENCY__DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "** DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "** DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_ANALOG_OUTPUT__STATE__TRUE: "liga",
    DIGITAL_ANALOG_OUTPUT__STATE__FALSE: "desliga",
    DIGITAL_INPUT__FREQUENCY: "** DIGITAL_INPUT__FREQUENCY",
    DIGITAL_INPUT__STATE__TRUE: "sim",
    DIGITAL_INPUT__STATE__FALSE: "não",
    DIGITAL_OUTPUT__STATE__TRUE: "liga",
    DIGITAL_OUTPUT__STATE__FALSE: "desliga",
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "estado mudar",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "restaurar a última dimming",
    DIMMER__RAMP_TIME: "escurecimento",
    DIMMER__ON_TIME: "dever",
    DIMMER__RAMP_STOP: "escurecimento stop",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "corrente de saída",
    DIMMER__ENERGY_COUNTER: "O consumo atual de energia",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "Erro de carga",
    DIMMER__ERROR_REDUCED__FALSE: "-",
    DIMMER__ERROR_REDUCED__TRUE: "potência reduzida",
    DIMMER__ERROR_OVERHEAT__FALSE: "-",
    DIMMER__ERROR_OVERHEAT__TRUE: "sobreaquecimento",
    DIMMER__ERROR_OVERLOAD__FALSE: "-",
    DIMMER__ERROR_OVERLOAD__TRUE: "sobrecarga",
    DIMMER__LEVEL_REAL: "valor real",
    DISPLAY__TEXT: "display",
    DISPLAY__BULB: "bulbo",
    DISPLAY__SWITCH: "switch",
    DISPLAY__WINDOW: "janela",
    DISPLAY__DOOR: "porta",
    DISPLAY__BLIND: "cego",
    DISPLAY__SCENE: "cena",
    DISPLAY__PHONE: "telefone",
    DISPLAY__BELL: "sino",
    DISPLAY__CLOCK: "relógio",
    DISPLAY__ARROW_UP: "seta para cima",
    DISPLAY__ARROW_DOWN: "seta para baixo",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "° C",
    DISPLAY__UNIT__4: "° F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "bip 1",
    DISPLAY__BEEP__2: "bip 2",
    DISPLAY__BEEP__3: "bip 3",
    DISPLAY__BACKLIGHT__0: "backlight off",
    DISPLAY__BACKLIGHT__1: "luz de fundo",
    DISPLAY__BACKLIGHT__2: "backlight piscando lentamente",
    DISPLAY__BACKLIGHT__3: "backlight piscando rapidamente",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "toque curto",
    INPUT_OUTPUT__PRESS_LONG: "pressão longa",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "estado off",
    KEY__LED_STATUS__1: "red Estado",
    KEY__LED_STATUS__2: "verde Estado",
    KEY__LED_STATUS__3: "orange Estado",
    KEY__LED_SLEEP_MODE: "** KEY__LED_SLEEP_MODE",
    KEY__PRESS_SHORT: "toque curto",
    KEY__PRESS_LONG: "pressão longa",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "instantâneo",
    KEY__RESET: "reboot",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__TRUE: "aberto",
    KEYMATIC__STATE__FALSE: "fechar",
    KEYMATIC__OPEN: "aberto",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__TRUE: "estado incerto",
    KEYMATIC__STATE_UNCERTAIN__FALSE: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "Erro de ligação",
    KEYMATIC__ERROR__2: "motor parado",
    MOTION_DETECTOR__BRIGHTNESS: "brilho",
    MOTION_DETECTOR__SET_BRIGHTNESS: "definição de brilho",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "próxima transmissão",
    MOTION_DETECTOR__MOTION__TRUE: "movimento detectado",
    MOTION_DETECTOR__MOTION__FALSE: "nenhum movimento detectado",
    MOTION_DETECTOR__SET_MOTION: "set movimento",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "sabotagem acionado",
    POWER__LOWBAT: "bateria fraca",
    POWER__BAT_VOLTAGE: "voltagem da bateria",
    POWERMETER__BOOT__TRUE: "** POWERMETER__BOOT__TRUE",
    POWERMETER__BOOT__FALSE: "** POWERMETER__BOOT__FALSE",
    POWERMETER__ENERGY_COUNTER: "O consumo atual de energia",
    POWERMETER__POWER: "corrente de saída",
    POWERMETER__CURRENT: "amperagem",
    POWERMETER__VOLTAGE: "tensão na saída switch",
    POWERMETER__FREQUENCY: "freqüência",
    POWERMETER__SUM_1H: "O consumo de energia para a última hora",
    POWERMETER__SUM_24H: "o consumo de energia das últimas 24 horas",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "contador de energia a gás",
    POWERMETER_IGL__GAS_POWER: "A produção de gás atual",
    POWERMETER_IGL__ENERGY_COUNTER: "contador de energia",
    POWERMETER_IGL__POWER: "corrente de saída",
    PULSE_SENSOR__SEQUENCE_OK: "sequência de aceitar",
    RAINDETECTOR__STATE__0: "seco",
    RAINDETECTOR__STATE__1: "rain",
    RAINDETECTOR_HEAT__STATE__TRUE: "aquecimento ligado",
    RAINDETECTOR_HEAT__STATE__FALSE: "aquecimento desligado",
    RAINDETECTOR_HEAT__ON_TIME: "ciclo de funcionamento (aquecimento)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__TRUE: "on",
    RELAIS__STATE__FALSE: "off",
    RELAIS__VALUE: "valor de comando",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "dever",
    RELAIS__RAMP_TIME: "escurecimento",
    RGBW_AUTOMATIC__PROGRAM__0: "off",
    RGBW_AUTOMATIC__PROGRAM__1: "lento",
    RGBW_AUTOMATIC__PROGRAM__2: "normal",
    RGBW_AUTOMATIC__PROGRAM__3: "rápido",
    RGBW_AUTOMATIC__PROGRAM__4: "fogueira",
    RGBW_AUTOMATIC__PROGRAM__5: "cachoeira",
    RGBW_AUTOMATIC__PROGRAM__6: "TV",
    RGBW_AUTOMATIC__ON_TIME: "dever",
    RGBW_AUTOMATIC__RAMP_TIME: "escurecimento",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "brilho atual",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "cor",
    RGBW_COLOR__ON_TIME: "dever",
    RGBW_COLOR__RAMP_TIME: "escurecimento",
    RGBW_COLOR__ACT_BRIGHTNESS: "Brigthness atual",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "valor de cor HSV",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "bloqueado",
    ROTARY_HANDLE_SENSOR__STATE__1: "derrubado",
    ROTARY_HANDLE_SENSOR__STATE__2: "aberto",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "sabotagem acionado",
    ROTARY_HANDLE_SENSOR__LOWBAT__TRUE: "bateria fraca",
    ROTARY_HANDLE_SENSOR__LOWBAT__FALSE: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "consumo total",
    SENSOR__SUM_DATE: "timestamp inicialização do contador de consumo total",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "redefinição consumo total",
    SENSOR__CONTROL__0: "desconhecido",
    SENSOR__CONTROL__1: "meter AC",
    SENSOR__CONTROL__2: "medidor de energia eficaz",
    SENSOR__CONTROL__3: "medidor de gás",
    SENSOR__SENSOR__TRUE: "** SENSOR__SENSOR__TRUE",
    SENSOR__SENSOR__FALSE: "** SENSOR__SENSOR__FALSE",
    SENSOR__STATE__TRUE: "on",
    SENSOR__STATE__FALSE: "off",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "consumo médio (5 min)",
    SENSOR__MAX5MINUTES: "O consumo máximo (5 min)",
    SENSOR__SUM_1H: "O consumo de última hora",
    SENSOR__MAX_1H: "consumo máximo de última hora",
    SENSOR__SUM_24H: "O consumo (24 h)",
    SENSOR__MAX_24H: "O consumo máximo (24 h)",
    SENSOR__METER: "meter",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "consumo médio no último intervalo de medição",
    SENSOR__LAST_TICKS: "intervalo de medição último em segundos de tempo de 10 (GZ)",
    SENSOR__UNITSPTURN: "factor de conversão",
    SENSOR__DISTANCE: "sensor de proximidade",
    SENSOR__F_PERCENT: "por cento nível",
    SENSOR__F_LEVEL: "nível",
    SENSOR__F_VOLUME: "capacidade",
    SENSOR__RELAIS1__TRUE: "relé 1 on",
    SENSOR__RELAIS1__FALSE: "relé 1 off",
    SENSOR__RELAIS2__TRUE: "relé 2 on",
    SENSOR__RELAIS2__FALSE: "relé 2 off",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "tipo de sensor",
    SENSOR__ERROR: "mensagem de erro",
    SENSOR__ON_TIME: "dever",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "CO<sub>2</sub> concentração normal",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "CO<sub>2</sub> concentração aumentou",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "CO<sub>2</sub> concentração muito maior",
    SHUTTER_CONTACT__STATE__TRUE: "aberto",
    SHUTTER_CONTACT__STATE__FALSE: "fechado",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "sabotagem acionado",
    SHUTTER_CONTACT__LOWBAT__TRUE: "bateria fraca",
    SHUTTER_CONTACT__LOWBAT__FALSE: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__TRUE: "on",
    SIGNAL_CHIME__STATE__FALSE: "off",
    SIGNAL_CHIME__ON_TIME: "dever",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__TRUE: "on",
    SIGNAL_LED__STATE__FALSE: "off",
    SIGNAL_LED__ON_TIME: "dever",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__TRUE: "fumaça registrada",
    SMOKE_DETECTOR__STATE__FALSE: "OK",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "teste de alarme falhou",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "câmara de fumo degradada",
    SMOKE_DETECTOR__LOWBAT__TRUE: "bateria fraca",
    SMOKE_DETECTOR__LOWBAT__FALSE: "-",
    SMOKE_DETECTOR_TEAM__STATE__TRUE: "fumaça registrada",
    SMOKE_DETECTOR_TEAM__STATE__FALSE: "OK",
    STATUS_INDICATOR__STATE__TRUE: "on",
    STATUS_INDICATOR__STATE__FALSE: "off",
    STATUS_INDICATOR__ON_TIME: "dever",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "cancelar timer",
    SYSTEM__TIMER_SET: "set timer",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__TRUE: "on",
    SYSTEM__STATE__FALSE: "off",
    SYSTEM__TIMER_GET: "tempo restante",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "toque curto",
    SYSTEM__CMD_RUNL: "pressão longa",
    SYSTEM__CMD_SETS: "-",
    SYSTEM__CMD_SETL: "-",
    SYSTEM__CMD_RETS: "-",
    SYSTEM__CMD_RETL: "-",
    SYSTEM__CMD_QUERY_RET: "-",
    SYSTEM__CMD_EXEC: "-",
    SYSTEM__CMD_KILL: "-",
    SYSTEM__LOGIT: "-",
    SYSTEM__SYSLOG: "-",
    SYSTEM__SET_STATE: "** SYSTEM__SET_STATE",
    SYSTEM__RAND: "** SYSTEM__RAND",
    SYSTEM__HOLD: "** SYSTEM__HOLD",
    SYSTEM__CONTROL: "** SYSTEM__CONTROL",
    SYSTEM__SEND: "keystroke no WebUI",
    SYSTEM__MAILTO: "destinatário de e-mail",
    SYSTEM__MAILCC: "email cc",
    SYSTEM__SUBJECT: "assunto do email",
    SYSTEM__TYPE__0: "text",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "alarme",
    SYSTEM__TEXT: "text",
    SYSTEM__TEMPLATEID: "template ID",
    SYSTEM__OPTION_1: "dados para um modelo pré-definido",
    SYSTEM__OPTION_2: "dados de modelo predefinido 2",
    SYSTEM__OPTION_3: "dados de modelo predefinido 3",
    SYSTEM__OPTION_4: "dados de modelo predefinido 4",
    SYSTEM__OPTION_5: "dados de modelo predefinido 5",
    SYSTEM__RETURN: "valor de retorno de chamada de função",
    SYSTEM__PHONE: "número de telefone SMS",
    SYSTEM__PRIORITY__0: "baixa prioridade",
    SYSTEM__PRIORITY__1: "prioridade normal",
    SYSTEM__PRIORITY__2: "prioridade importante",
    SYSTEM__PRIORITY__3: "prioridade alta",
    SYSTEM__PRIORITY__4: "prioridade crítica",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "endereço registrado",
    SWITCH__IP: "endereço de resolução de DNS",
    SWITCH__UNREACH_CTR: "tentativas falharam",
    SWITCH__STATE__TRUE: "on",
    SWITCH__STATE__FALSE: "off",
    SWITCH__ON_TIME: "dever",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "estado mudar",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "power-ups (1 h)",
    SWITCH__TIME_ON_1H: "duração total (em) (1 h)",
    SWITCH__TIME_OFF_1H: "duração total (off) (1 h)",
    SWITCH__TIME_ON: "última duração (on)",
    SWITCH__TIME_OFF: "última duração (desligado)",
    SWITCH__TIME_ON_SUM: "duração total (on)",
    SWITCH__SWITCH_SUM: "número de power-ups",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__TRUE: "on",
    SWITCH__TIME_STATE__FALSE: "off",
    SWITCH__INFO_LED__0: "off",
    SWITCH__INFO_LED__1: "verde",
    SWITCH__INFO_LED__2: "laranja",
    SWITCH__INFO_LED__3: "vermelho",
    SWITCH__SUM_RESET: "contador de reset",
    SWITCH__SET_STATE: "valor definido",
    SWITCH__NIGHT_MODE: "modo noturno",
    SWITCH__NIGHT_MODE__TRUE: "modo noturno",
    SWITCH__NIGHT_MODE__FALSE: "-",
    SWITCH__POWER: "corrente de saída",
    SWITCH__ERROR_OVERLOAD__TRUE: "sobrecarga",
    SWITCH__ERROR_OVERLOAD__FALSE: "-",
    SWITCH__ENERGY_COUNTER: "O consumo atual de energia",
    SWITCH__RCVS: "**SWITCH__RCVS",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__TRUE: "bateria fraca",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__TRUE: "erro de comunicação",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__TRUE: "janela aberta",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "** THERMALCONTROL_TRANSMIT__BATTERY_STATE",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "temperatura",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "umidade atual",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "modo de reforço",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "abaixamento",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "manual",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "conforto",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "automático",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "temperatura",
    THERMALCONTROL_TRANSMIT__PARTY_START: "hora de início",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "tempo do fim",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__TRUE: "tilt registrado",
    TILT_SENSOR__STATE__FALSE: "OK",
    TILT_SENSOR__LOWBAT__TRUE: "bateria fraca",
    TILT_SENSOR__LOWBAT__FALSE: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "restaurar a última dimming",
    VIRTUAL_DIMMER__RAMP_TIME: "escurecimento",
    VIRTUAL_DIMMER__ON_TIME: "dever",
    VIRTUAL_DIMMER__RAMP_STOP: "pare de escurecimento",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "Erro de carga",
    VIRTUAL_DIMMER__ERROR_REDUCED__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__TRUE: "potência reduzida",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__TRUE: "sobreaquecimento",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__TRUE: "sobrecarga",
    VIRTUAL_DIMMER__LEVEL_REAL: "valor real",
    VIRTUAL_KEY__PRESS_SHORT: "toque curto",
    VIRTUAL_KEY__PRESS_LONG: "pressão longa",
    VIRTUAL_KEY__LEVEL: "-",
    WATERDETECTIONSENSOR__STATE__0: "seco",
    WATERDETECTIONSENSOR__STATE__1: "úmido",
    WATERDETECTIONSENSOR__STATE__2: "wet",
    WATERDETECTIONSENSOR__LOWBAT__TRUE: "bateria fraca",
    WATERDETECTIONSENSOR__LOWBAT__FALSE: "-",
    WEATHER__HUMIDITY: "humidade",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "temperatura",
    WEATHER__WIND_SPEED: "a velocidade do vento",
    WEATHER__WIND_DIRECTION: "direção do vento",
    WEATHER__WIND_DIRECTION_RANGE: "faixa de direção do vento",
    WEATHER__SUNSHINEDURATION: "insolação",
    WEATHER__RAINING__TRUE: "rain",
    WEATHER__RAINING__FALSE: "-",
    WEATHER__RAIN_COUNTER: "precipitação",
    WEATHER__RAIN_CTR: "precipitação",
    WEATHER__DEW_POINT: "ponto de orvalho",
    WEATHER__ABS_HUMIDITY: "umidade absoluta",
    WEATHER__TEMP_MIN_24H: "temperatura min (24 horas)",
    WEATHER__TEMP_MAX_24H: "Temperatura máxima (24 h).",
    WEATHER__HUM_MIN_24H: "min umidade (24 h)",
    WEATHER__HUM_MAX_24H: "max humidade (24 h).",
    WEATHER__WIND_MAX_24H: "a velocidade do vento máxima (24 h)",
    WEATHER__RAIN_CTR_24H: "precipitação (24 h)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "brilho",
    WEATHER__LOWBAT__TRUE: "bateria fraca",
    WEATHER__LOWBAT__FALSE: "-",
    WEATHER__AIR_PRESSURE: "pressão",
    WEATHER__SET_HUMIDITY: "set humidade",
    WEATHER__MEDIAN: "valor central",
    WEATHER__MEAN: "médio",
    WEATHER__BRIGHTNESS_WEST: "oeste brilho",
    WEATHER__BRIGHTNESS_SOUTH: "sul brilho",
    WEATHER__BRIGHTNESS_EAST: "a leste brilho",
    WEATHER_TRANSMIT__HUMIDITY: "humidade",
    WEATHER_TRANSMIT__TEMPERATURE: "temperatura",
    WEBCAM__INFO: "info texto",
    WEBCAM__IMAGE: "picture",
    WEBCAM__PTZ_CMD: "função pré-definida",
    WEBCAM__IR__0: "LED infravermelho off",
    WEBCAM__IR__1: "auto LED infravermelho",
    WEBCAM__IR__2: "infravermelho LED on",
    WINMATIC__SPEED: "velocidade",
    WINMATIC__STOP: "stop",
    WINMATIC__RELOCK_DELAY: "bloquear automaticamente após o tempo",
    WINMATIC__STATE_UNCERTAIN__TRUE: "estado incerto",
    WINMATIC__STATE_UNCERTAIN__FALSE: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "Erro de acionamento giratório",
    WINMATIC__ERROR__2: "drive inclinação de erro",
    WRAPPER__MEDIAN: "valor central",
    WRAPPER__MEAN: "médio",
    WRAPPER__SET_STATE: "set Estado",
    WRAPPER__TIME_ON_1H: "duração total (em) (1 h)",
    WRAPPER__TIME_OFF_1H: "duração total (off) (1 h)",
    WRAPPER__SWITCH_1H: "power-ups (1 h)",
    WRAPPER__TIME_ON_24H: "duração total (em) (24 h)",
    WRAPPER__TIME_OFF_24H: "duração total (off) (24 h)",
    WRAPPER__SWITCH_24H: "power-ups (24 h)",
    WRAPPER__PERCENT_ON_24H: "percentagem (a) (24 h)",
    WRAPPER__TIME_ON_168H: "duração total (em) (7 dias)",
    WRAPPER__TIME_OFF_168H: "duração total (off) (7 dias)",
    WRAPPER__SWITCH_168H: "power-ups (7 Tage)",
    WRAPPER__PERCENT_ON_168H: "percentagem (on) (7 dias)",
    WRAPPER__TIME_ON_HHH: "duração total (on)",
    WRAPPER__TIME_OFF_HHH: "duração total (desligado)",
    WRAPPER__SWITCH_HHH: "power-ups",
    WRAPPER__PERCENT_ON_HHH: "porcentagem",
    WRAPPER__STATE__TRUE: "on",
    WRAPPER__STATE__FALSE: "off",
    WRAPPER__TIME_ON: "última duração (on)",
    WRAPPER__TIME_OFF: "última duração (desligado)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    // Servicemeldungen
    ALARMDP__CONFIG_PENDING: "dados de configuração são transmitidos",
    ALARMDP__DEVICE_IN_BOOTLOADER: "dispositivo é reiniciado",
    ALARMDP__LOWBAT: "bateria fraca",
    ALARMDP__STICKY_UNREACH: "A comunicação foi interrompida",
    ALARMDP__U_SOURCE_FAIL: "falha de alimentação",
    ALARMDP__UNREACH: "comunicação perturbado no momento",
    ALARMDP__UPDATE_PENDING: "atualização disponível",
    ALARMDP__USBH_POWERFAIL: "host USB desativado",
    //Sprachen
    DE: "Alemão",
    EN: "Inglês",
    ES: "Espanhol",
    FR: "Francês",
    PT: "Português",
    RU: "Russo",
    TR: "Turco",
    ZH: "Chinês",
    LANGUAGE: "Idioma",
    //CCU Bezeichnungen
    ROOMLIVINGROOM: "Sala de estar",
    ROOMKITCHEN: "Cozinha",
    ROOMBEDROOM: "Quarto",
    ROOMCHILDRENSROOM1: "Quarto das crianças 1",
    ROOMCHILDRENSROOM2: "Quarto das crianças 2",
    ROOMOFFICE: "Escritório",
    ROOMBATHROOM: "Banheiro",
    ROOMGARAGE: "Garagen",
    ROOMHWR: "Despensa",
    ROOMGARDEN: "Jardim",
    ROOMTERRACE: "Terraço",
    FUNCLIGHT: "Luz",
    FUNCHEATING: "Aquecimento",
    FUNCCLIMATECONTROL: "Condições climáticas",
    FUNCWEATHER: "Tempo",
    FUNCENVIRONMENT: "Meio Ambiente",
    FUNCSECURITY: "Segurança",
    FUNCLOCK: "Trancar",
    FUNCBUTTON: "Botão",
    FUNCCENTRAL: "Controle central",
    FUNCENERGY: "Gestão de energia",
    // Andere Bezeichnungen
    OPEN: "aberto",
    OPEN_SHORT: "aberto",
    CLOSE: "fechar",
    CLOSE_SHORT: "close",
    LOCKED: "bloqueado",
    LOCK: "lock",
    ON: "on",
    OFF: "off",
    MAX: "max",
    MED: "med",
    MIN: "min",
    RUN: "corra",
    SAVE: "salvar",
    YES: "sim",
    NO: "não",
    VISIBILITY: "visibilidade",
    DELETE: "deletar",
    UPLOAD: "upload de imagem",
    SYS_VAR: "variáveis ​​do sistema",
    PROGRAMS: "programas",
    FAVORITES: "favoritos",
    ROOMS: "quartos",
    FUNCTIONS: "funções",
    EDIT: "editar",
    OPTIONS: "opções",
    OPTIONS_CLIENT: "Opções para este dispositivo",
    TEST_DEVICE: "página de teste HM",
    TEST_CUXD: "página CUXD teste",
    UNKNOWN_ERROR: "erro desconhecido",
    NO_SERVICE_MESSAGES: "Sem mensagens de serviços disponíveis.",
    UNKNOWN_VAR_TYPE: "tipo de variável desconhecida",
    SETTINGS: "configurações",
    TIME_SEC_SINGULAR: "segundo",
    TIME_SEC_PLURAL: "segundos",
    TIME_MIN_SINGULAR: "minuto",
    TIME_MIN_PLURAL: "minutos",
    TIME_H_SINGULAR: "hora",
    TIME_H_PLURAL: "horas",
    TIME_DAY_SINGULAR: "dia",
    TIME_DAY_PLURAL: "dias",
    TIME_W_SINGULAR: "semana",
    TIME_W_PLURAL: "semanas",
    TIME_MON_SINGULAR: "mês",
    TIME_MON_PLURAL: "meses",
    TIME_Y_SINGULAR: "ano",
    TIME_Y_PLURAL: "anos",
    TIME_PREFIX: " ",
    TIME_SUFFIX: "atrás",
    LOADING: "carregamento",
    SET: "set",
    DEFAULT: "default",
    BLACK: "black",
    PINK: "pink",
    GREEN: "verde",
    YELLOW: "amarelo",
    GREY: "cinzenta",
    AZUL: "azul",
    RED: "vermelho",
    BROWN: "marrom",
    WHITE: "branco",
    BRAZIL: "O Brasil",
    GERMANY: "Alemanha",
    SHOW: "show",
    HIDE: "esconder",
    NO_VALUE: "nenhuma",
    SMALL: "pequeno",
    BIG: "grande",
    GRAPHICS_SIZE: "Tamanho dos gráficos",
    FILTER: "filtragem de dados ...",
    TRANSFER: "transferência ...",
    DELAY: "valor é ainda transferido para o dispositivo e apresentada apenas após um atraso aqui.",
    TRANSFER_OK: "OK!",
    IMAGE_UPLOAD: "É só podem JPG, GIF ou PNG são enviados!",
    START: "começar ...",
    NEW_VERSION: "Nova versão WebMatic",
    DOWNLOAD: "link para download",
    MANUAL: "única execução manual",
    OPERATABLE: "operável",
    HISTORIAN_DURATION: "Os últimos...",
    CHOOSE_THEME: "Escolha um tema",
    NOT_SELECTED: "configuração global",
    DESIGN: "aparência",
    FONT: "fonte",
    MENU: "entradas do menu",
    DEFAULT_OPEN: "Mostrar a primeira chamada",
    DEFAULT_READONLY: "Por padrão, somente leitura",
    HISTORIAN_WARNING: "Digite na Configuração > Opções da URL",
    NEW_UPDATES_WARNING: "Informações sobre novos lançamentos",
    STABLE: "somente versões estáveis",
    ALPHA: "também versões alfa",
    OTHERS: "outros",
    DONT_LEAVE: "Prevenir acidental sair da página",
    CHOOSE: "escolha",
    DELETE_SETTINGS: "eliminar as definições",
    RELOAD: "reload",
    CLIENT_SETTINGS: "As configurações do cliente",
    CLIENT_TITLE: "nome do cliente",
    DEFAULT_SORT: "ordenação padrão",
    ALPHABETICAL: "alfabética",
    MANUALLY: "manualmente",
    DELETE_SETTINGS_WARNING: "Atenção Todas as configurações do cliente selecionado será excluído.",
    END_CLIENT_MODUS: "End Modo de configuração do cliente",
    REMOVE_MESSAGES: "Remover distúrbios desatualizados",
    ABOUT: "cerca de",
    SERVICE_NOTE: "Notificações de Serviços",
    NO_DISORDERS: "Nenhuma mensagem de serviços disponíveis",
    TWO_SITES_VERSION: "Exibição em 2 páginas",
    TWO_SITES_TRANSITION: "Efeito na mudança de página",
    BACK: "Voltar",
    NUMBER_OF_COLUMNS: "Número de colunas"
};


