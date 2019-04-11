module.exports.equipmentSchema = {
    "id": "http://gvdemo.guardvant.com/gvos/schema/equipment",
    "type": "object",
    "properties": {
        "primary_key": {
            "type": "integer"
        },
        "updated_at": {
            "type": "date"
        },
        "created_at": {
            "type": "date"
        },
        "deleted_at": {
            "type": "date"
        },
        "name": {
            "type": "string",
            "length": 32
        },
        "enabled": {
            "type": "boolean"
        },
        "silent": {
            "type": "boolean"
        },
        "device": {
            "type": "GvDevice"
        },
        "equipment_type": {
            "type": "GvEquipmentType"
        },
        "status": {
            "type": "GvStatus"
        },
        "activity": {
            "type": "GvActivity"
        },
        "material_type": {
            "type": "GvMaterialType"
        },
        "operator": {
            "type": "GvEmployee"
        },
        "location": {
            "type": "GvLocation"
        },
        "location_next": {
            "type": "GvLocation"
        },
        "shovel": {
            "type": "GvEquipment"
        },
        "longitude": {
            "type": "integer"
        },
        "latitude": {
            "type": "integer"
        },
        "elevation": {
            "type": "integer"
        },
        "login": {
            "type": "GvLogin"
        }
    }
}
    