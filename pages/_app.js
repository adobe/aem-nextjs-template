/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */

import '../styles/index.scss';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import CustomModelClient from '../lib/CustomModelClient';
import ErrorBoundary from '../components/ErrorBoundary';
import '../components/import-components';

const modelClient = new CustomModelClient(process.env.NEXT_PUBLIC_AEM_HOST);
ModelManager.initializeAsync({
  modelClient,
});

export default function App({ Component, pageProps }) {
  return <ErrorBoundary>
    <Component {...pageProps} />
  </ErrorBoundary>;
}
