'use strict';

angular.module('VAST.version', [
  'VAST.version.interpolate-filter',
  'VAST.version.version-directive'
])

.value('version', '0.1');
