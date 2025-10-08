"use strict";
var wp;
(wp ||= {}).undoManager = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/undo-manager/build-module/index.js
  var build_module_exports = {};
  __export(build_module_exports, {
    createUndoManager: () => createUndoManager
  });

  // packages/is-shallow-equal/build-module/objects.js
  function isShallowEqualObjects(a, b) {
    if (a === b) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    let i = 0;
    while (i < aKeys.length) {
      const key = aKeys[i];
      const aValue = a[key];
      if (
        // In iterating only the keys of the first object after verifying
        // equal lengths, account for the case that an explicit `undefined`
        // value in the first is implicitly undefined in the second.
        //
        // Example: isShallowEqualObjects( { a: undefined }, { b: 5 } )
        aValue === void 0 && !b.hasOwnProperty(key) || aValue !== b[key]
      ) {
        return false;
      }
      i++;
    }
    return true;
  }

  // packages/is-shallow-equal/build-module/arrays.js
  function isShallowEqualArrays(a, b) {
    if (a === b) {
      return true;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0, len = a.length; i < len; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  // packages/is-shallow-equal/build-module/index.js
  function isShallowEqual(a, b) {
    if (a && b) {
      if (a.constructor === Object && b.constructor === Object) {
        return isShallowEqualObjects(a, b);
      } else if (Array.isArray(a) && Array.isArray(b)) {
        return isShallowEqualArrays(a, b);
      }
    }
    return a === b;
  }

  // packages/undo-manager/build-module/index.js
  function mergeHistoryChanges(changes1, changes2) {
    const newChanges = { ...changes1 };
    Object.entries(changes2).forEach(([key, value]) => {
      if (newChanges[key]) {
        newChanges[key] = { ...newChanges[key], to: value.to };
      } else {
        newChanges[key] = value;
      }
    });
    return newChanges;
  }
  var addHistoryChangesIntoRecord = (record, changes) => {
    const existingChangesIndex = record?.findIndex(
      ({ id: recordIdentifier }) => {
        return typeof recordIdentifier === "string" ? recordIdentifier === changes.id : isShallowEqual(recordIdentifier, changes.id);
      }
    );
    const nextRecord = [...record];
    if (existingChangesIndex !== -1) {
      nextRecord[existingChangesIndex] = {
        id: changes.id,
        changes: mergeHistoryChanges(
          nextRecord[existingChangesIndex].changes,
          changes.changes
        )
      };
    } else {
      nextRecord.push(changes);
    }
    return nextRecord;
  };
  function createUndoManager() {
    let history = [];
    let stagedRecord = [];
    let offset = 0;
    const dropPendingRedos = () => {
      history = history.slice(0, offset || void 0);
      offset = 0;
    };
    const appendStagedRecordToLatestHistoryRecord = () => {
      const index = history.length === 0 ? 0 : history.length - 1;
      let latestRecord = history[index] ?? [];
      stagedRecord.forEach((changes) => {
        latestRecord = addHistoryChangesIntoRecord(latestRecord, changes);
      });
      stagedRecord = [];
      history[index] = latestRecord;
    };
    const isRecordEmpty = (record) => {
      const filteredRecord = record.filter(({ changes }) => {
        return Object.values(changes).some(
          ({ from, to }) => typeof from !== "function" && typeof to !== "function" && !isShallowEqual(from, to)
        );
      });
      return !filteredRecord.length;
    };
    return {
      addRecord(record, isStaged = false) {
        const isEmpty = !record || isRecordEmpty(record);
        if (isStaged) {
          if (isEmpty) {
            return;
          }
          record.forEach((changes) => {
            stagedRecord = addHistoryChangesIntoRecord(
              stagedRecord,
              changes
            );
          });
        } else {
          dropPendingRedos();
          if (stagedRecord.length) {
            appendStagedRecordToLatestHistoryRecord();
          }
          if (isEmpty) {
            return;
          }
          history.push(record);
        }
      },
      undo() {
        if (stagedRecord.length) {
          dropPendingRedos();
          appendStagedRecordToLatestHistoryRecord();
        }
        const undoRecord = history[history.length - 1 + offset];
        if (!undoRecord) {
          return;
        }
        offset -= 1;
        return undoRecord;
      },
      redo() {
        const redoRecord = history[history.length + offset];
        if (!redoRecord) {
          return;
        }
        offset += 1;
        return redoRecord;
      },
      hasUndo() {
        return !!history[history.length - 1 + offset];
      },
      hasRedo() {
        return !!history[history.length + offset];
      }
    };
  }
  return __toCommonJS(build_module_exports);
})();
//# sourceMappingURL=index.js.map
