import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.scss']
})
export class ApiDocComponent implements OnInit {

  description: Object;
  constructor() { }

  ngOnInit() {
    this.description = [
      {
        header: 'Pagination',
        detail: 'All GET endpoints which return an object list support cursor based pagination with pagination information inside a pagination object. This means that to get all objects, you need to paginate through the results by always using the id of the last resource in the list as a starting_after parameter for the next call. To make it easier, the API will contruct the next call into next_uri together with all the currently used pagination parameters. You know that you have paginated all the results when the response’s next_uri is empty. While using cursor based pagination might seem weird compared to many APIs it protects from the situation when the resulting object list changes during pagination (new resource gets added or removed).Default limit is set to 25 but values up to 100 are permitted. Due to permissions and access level control, the response list might in some cases return less objects than specified by the limit parameter. This is normal behaviour and should be expected.The result list is in descending order by default (newest item first) but it can be reversed by supplying order=asc instead.',
        endPoint:'https://api.coinbase.com/v2/',
        data: {
          header:'request',
          json: {
            pagination: {
              ending_before: null,
              starting_after: null,
              limit: 25,
              order: 'desc',
              previous_uri: null,
              next_uri: '/v2/accounts?&limit=25&starting_after=5d5aed5f-b7c0-5585-a3dd-a7ed9ef0e414'
            },
          }
        },
        section:'Pagination'
      },
      {
        header: 'Scope',
        detail: 'Both API key and OAuth2 authentication require that you obtain correct permissions (scopes) to access different API endpoints.All authenticated endpoints, except GET /user, require a specific scope to access them. Some endpoints might also have additional scopes for additional information or access. In general, permissions follow the service-name:resource:action pattern, where the service is wallet for the main Coinbase API.With OAuth2, scopes should be considered as grants: Users can select which scopes they grant access to for the application. The application might need to request new scopes over the lifecycle of the authorization. To see which permissions the user has granted, you can use GET /user/auth endpoint.As a general rule, you should only ask for scopes which your application needs and avoid asking for access to unnessary ones. Users more readily grant access to limited, clearly described scopes.',
        endPoint:'',
        data: {},
        section:'Scope'
      },
      {
        header: 'CORS',
        detail: 'Coinbase API v2 supports cross-origin HTTP requests which is commonly referred as CORS. This means that you can call API resources using Javascript from any browser. While this allows many interesting use cases, it’s important to remember that you should never expose private API keys to 3rd parties. CORS is mainly useful with unauthenticated endpoints (e.g. Bitcoin price information) and OAuth2 client side applications.',
        endPoint:'',
        data: {},
        section:'CORS'
      },
      {
        header: 'Versioning',
        detail: 'All API calls should be made with a CB-VERSION header which guarantees that your call is using the correct API version. Version is passed in as a date (UTC) of the implementation in YYYY-MM-DD format. If no version is passed, the version from user’s API settings will be used and a warning will be shown. Under no circumstance should you always pass in the current date, as that will return the current version which might break your implementation. For information about notification versioning, refer to notification documentation.',
        endPoint:'',
        data: {},
        section:'Versioning'
      },
      {
        header: 'Rate limiting',
        detail: 'The Coinbase API is rate limited to prevent abuse that would degrade our ability to maintain consistent API performance for all users. By default, each API key or app is rate limited at 10,000 requests per hour. If your requests are being rate limited, HTTP response code 429 will be returned with an rate_limit_exceeded error.',
        endPoint:'',
        data: {
          header:'Sample response',
          json: {
            errors: [
              {
                id: 'rate_limit_exceeded',
                message: 'Too many requests'
              }
            ]
          }
        },
        section:'Rate limiting'
      },
      {
        header: 'Expanding resources',
        detail: 'Many resources, like transactions, have other resources linked to them. By default only the resource type (resource), id (id) and path (resource_path) are exposed which can be used to fetch the resource separately. In some cases it’s useful to expand the resource in the response body. While this might increase the request time and payload, it’s still faster than fetching several resources separately. Resources are expanded by passing an array of fields to expand with expand parameter (e.g. ?expand[]=to&expand[]=account). This can be done both when fetching existing or creating new resources. If you want to expand all available resources, you can pass expand=all. This is useful with large and complex resources like transactions but it makes queries slower and increases the request payload size. Notifications',
        endPoint:'',
        data: {
          header:'Some request',
          json: {
            id: '0ec2de93-7dae-5a50-8580-6445a08e4ae4',
            type: 'send',
            status: 'pending',
            amount: {
              amount: '-1.00000000',
              currency: 'BTC'
            },
            native_amount: {
              amount: '-10.00',
              currency: 'USD'
            },
            description: null,
            created_at: '2015-01-31T20:49:02Z',
            updated_at: '2015-01-31T20:49:02Z',
            resource: 'transaction',
            resource_path: '/v2/accounts/8fcd97cd-50ca-5803-8c27-1146e54b1c09/transactions/0ec2de93-7dae-5a50-8580-6445a08e4ae4',
            network: {
              status: 'unconfirmed',
              hash: 'a7e23afeccf863dc8359ba04d2b854eddb6dea6901643828fdb3aca53d8bf600'
            },
            to: {
              id: '9d55bef5-47f1-5936-b771-b07c1d8140a2',
              name: 'James Smith',
              username: null,
              profile_location: null,
              profile_bio: null,
              profile_url: null,
              avatar_url: 'https://images.coinbase.com/avatar?h=KphlECxEemoPGv3xtMSxqG2Ud7gEzke9mh0Ff3ifsiu9ggPwStQLCCuQfk6N%0AyY1p&s=128',
              resource: 'user',
              resource_path: '/v2/users/9d55bef5-47f1-5936-b771-b07c1d8140a2'
            }
          }
        },
        section:'Expanding resources'
      }
    ]
  }

}
