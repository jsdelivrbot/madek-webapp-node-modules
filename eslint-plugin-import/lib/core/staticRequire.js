'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStaticRequire;
// todo: merge with module visitor
function isStaticRequire(node) {
  return node && node.callee && node.callee.type === 'Identifier' && node.callee.name === 'require' && node.arguments.length === 1 && node.arguments[0].type === 'Literal' && typeof node.arguments[0].value === 'string';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvc3RhdGljUmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJpc1N0YXRpY1JlcXVpcmUiLCJub2RlIiwiY2FsbGVlIiwidHlwZSIsIm5hbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQ3dCQSxlO0FBRHhCO0FBQ2UsU0FBU0EsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDNUMsU0FBT0EsUUFDTEEsS0FBS0MsTUFEQSxJQUVMRCxLQUFLQyxNQUFMLENBQVlDLElBQVosS0FBcUIsWUFGaEIsSUFHTEYsS0FBS0MsTUFBTCxDQUFZRSxJQUFaLEtBQXFCLFNBSGhCLElBSUxILEtBQUtJLFNBQUwsQ0FBZUMsTUFBZixLQUEwQixDQUpyQixJQUtMTCxLQUFLSSxTQUFMLENBQWUsQ0FBZixFQUFrQkYsSUFBbEIsS0FBMkIsU0FMdEIsSUFNTCxPQUFPRixLQUFLSSxTQUFMLENBQWUsQ0FBZixFQUFrQkUsS0FBekIsS0FBbUMsUUFOckM7QUFPRCIsImZpbGUiOiJjb3JlL3N0YXRpY1JlcXVpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBtZXJnZSB3aXRoIG1vZHVsZSB2aXNpdG9yXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJlxuICAgIG5vZGUuY2FsbGVlICYmXG4gICAgbm9kZS5jYWxsZWUudHlwZSA9PT0gJ0lkZW50aWZpZXInICYmXG4gICAgbm9kZS5jYWxsZWUubmFtZSA9PT0gJ3JlcXVpcmUnICYmXG4gICAgbm9kZS5hcmd1bWVudHMubGVuZ3RoID09PSAxICYmXG4gICAgbm9kZS5hcmd1bWVudHNbMF0udHlwZSA9PT0gJ0xpdGVyYWwnICYmXG4gICAgdHlwZW9mIG5vZGUuYXJndW1lbnRzWzBdLnZhbHVlID09PSAnc3RyaW5nJ1xufVxuIl19