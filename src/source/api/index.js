import {root} from './config';

export const api = Object.freeze({
  login: {
    fetch: (auth) => {
      return fetch(`${root}/login`, {
        method: "POST",
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'authorization': auth,
        },
        credentials: "include",
      })
    }
  },
  logout: {
    fetch: () => {
      return fetch(`${root}/logout`, {
        method: "POST",
        credentials:'include'
      })
    }
  },
  getProfile: {
    fetch: () => {
      return fetch(`${root}/profile`, {
        method: "GET",
        credentials:'include'
      })
    }
  },
  userRegistration: {
    fetch: (body) => {
      return fetch(`${root}/users`, {
        method: "POST",
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify(body),
      })
    }
  },
  userUpdateProfile: {
    fetch: (body) => {
      return fetch(`${root}/users`, {
        method: "PUT",
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify(body),
      })
    }
  },
  getRecord: {
    fetch: (kind) => {
      return fetch(`${root}/records?kind=${kind}`, {
        method: "GET",
        credentials:'include'
      })
    }
  },
  createRecord: {
    fetch: (kind, body) => {
      return fetch(`${root}/records?kind=${kind}`, {
        method: "POST",
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify(body),
      })
    }
  },
  updateRecord: {
    fetch: (kind, body, hash) => {
      return fetch(`${root}/records/${hash}?kind=${kind}`, {
        method: "POST",
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify(body),
      })
    }
  },
  getReports: {
    fetch: () => {
      return fetch(`${root}/reports`, {
        method: "GET",
        credentials:'include'
      })
    }
  },
  clearReports: {
    fetch: () => {
      return fetch(`${root}/reports/reset`, {
        method: "POST",
        credentials:'include'
      })
    }
  },
});