const Long = require('long');

function encodeId(time, shardId, seqId) {
  const timeDnntBorn = 1516334100000; // 19/1/2018 10:55
  let idAfterEncode = Long.fromValue(Long.fromValue(time - timeDnntBorn).shl(23));
  idAfterEncode = idAfterEncode.or(Long.fromValue(Long.fromValue(shardId)).shl(10));
  idAfterEncode = idAfterEncode.or(Long.fromValue(Long.fromValue(seqId)).shl(0));
  return idAfterEncode.toString();
}

function decodeId(id) {
  return {
    time: Long.fromValue(id).shr(23).and(0x1ffffffffff).toNumber(),
    shardId: Long.fromValue(id).shr(10).and(0x1fff).toNumber(),
    seqId: Long.fromValue(id).shr(0).and(0x3ff).toNumber(),
  };
}

let genId = encodeId((new Date()).getTime(), 1, 22);
console.log(`+ Generated ID: ${genId}`);
console.log("+ Decode from ID: ", decodeId(genId));