import { ModuleProfile, Api, API, ApiEventEmitter, BaseApi } from '../../src'
import { EventEmitter } from 'events'

// Type
export interface PermissionModule extends Api {
  name: 'permissionModule'
  events: {}
  callWithPermission(): boolean
}

// Profile
export const PermissionModuleProfile: ModuleProfile<PermissionModule> = {
  name: 'permissionModule',
  methods: ['callWithPermission'],
  permission: true
}

// API
export class PermissionModuleApi extends BaseApi<PermissionModule> implements API<PermissionModule> {
  constructor() {
    super(PermissionModuleProfile)
  }

  public callWithPermission() {
    return true
  }
}